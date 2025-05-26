import {
  useRef,
  useState,
} from 'react';

const CARD_TYPES = [
  { name: "Visa", regex: /^4/, cvvLength: 3 },
  { name: "MasterCard", regex: /^5[1-5]/, cvvLength: 3 },
  { name: "AmEx", regex: /^3[47]/, cvvLength: 4 },
  { name: "Discover", regex: /^6(?:011|5)/, cvvLength: 3 },
]

function detectCardType(cardNumber: string) {
  const cleaned = cardNumber.replace(/\D/g, "")
  for (const type of CARD_TYPES) {
    if (type.regex.test(cleaned)) return type
  }
  return null
}

function luhnCheck(card: string): boolean {
  const digits = card.replace(/\D/g, "")
  let sum = 0
  let shouldDouble = false
  for (let i = digits.length - 1; i >= 0; i--) {
    let digit = parseInt(digits.charAt(i), 10)
    if (shouldDouble) {
      digit *= 2
      if (digit > 9) digit -= 9
    }
    sum += digit
    shouldDouble = !shouldDouble
  }
  return sum % 10 === 0
}

export function usePaymentForm() {
  const [cardNumber, setCardNumber] = useState("")
  const [expiry, setExpiry] = useState("")
  const [cvv, setCvv] = useState("")
  const [name, setName] = useState("")

  const [errors, setErrors] = useState<Record<string, string>>({})
  const cardType = detectCardType(cardNumber)

  const refs = {
    cardRef: useRef<HTMLInputElement>(null),
    expiryRef: useRef<HTMLInputElement>(null),
    cvvRef: useRef<HTMLInputElement>(null),
  }

  const formatCard = (val: string) =>
    val.replace(/\D/g, "").slice(0, 16).match(/.{1,4}/g)?.join("-") || ""

  const formatExpiry = (val: string) => {
    const cleaned = val.replace(/\D/g, "").slice(0, 4)
    if (cleaned.length >= 3) return cleaned.slice(0, 2) + "/" + cleaned.slice(2)
    return cleaned
  }

  const validateExpiry = (val: string) => {
    const [mm, yy] = val.split("/")
    const month = parseInt(mm)
    const year = parseInt("20" + yy)
    if (isNaN(month) || isNaN(year)) return false
    if (month < 1 || month > 12) return false
    const now = new Date()
    const expiry = new Date(year, month)
    return expiry > now
  }

  const handleCardChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCard(e.target.value)
    setCardNumber(formatted)

    if (formatted.replace(/\D/g, "").length === 16) {
      if (!luhnCheck(formatted)) {
        setErrors((prev) => ({ ...prev, cardNumber: "Invalid card number" }))
      } else {
        setErrors((prev) => {
          const { cardNumber, ...rest } = prev
          return rest
        })
      }
    }
  }

  const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = formatExpiry(e.target.value)
    setExpiry(val)

    if (val.length === 5 && !validateExpiry(val)) {
      setErrors((prev) => ({ ...prev, expiry: "Invalid or expired date" }))
    } else {
      setErrors((prev) => {
        const { expiry, ...rest } = prev
        return rest
      })
    }
  }

  const handleCvvChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const max = cardType?.cvvLength || 3
    const val = e.target.value.replace(/\D/g, "").slice(0, max)
    setCvv(val)
    if (val.length < max) {
      setErrors((prev) => ({ ...prev, cvv: "Incomplete CVV" }))
    } else {
      setErrors((prev) => {
        const { cvv, ...rest } = prev
        return rest
      })
    }
  }

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value
    setName(val)
    if (!val.trim()) {
      setErrors((prev) => ({ ...prev, name: "Name is required" }))
    } else {
      setErrors((prev) => {
        const { name, ...rest } = prev
        return rest
      })
    }
  }

  const isValid =
    Object.keys(errors).length === 0 &&
    cardNumber.replace(/\D/g, "").length === 16 &&
    luhnCheck(cardNumber) &&
    validateExpiry(expiry) &&
    cvv.length === (cardType?.cvvLength || 3) &&
    name.trim().length > 0

  return {
    refs,
    values: {
      cardNumber,
      expiry,
      cvv,
      name,
    },
    raw: {
      cardNumber: cardNumber.replace(/\D/g, ""),
      expiry,
      cvv,
      name,
    },
    errors,
    cardType,
    handlers: {
      handleCardChange,
      handleExpiryChange,
      handleCvvChange,
      handleNameChange,
    },
    isValid,
  }
}
