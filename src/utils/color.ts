import {useEffect, useState} from "react";

// Danh sách màu gốc (RGBA)
const baseColors = [
  "rgba(255, 99, 71, 1)", // Tomato
  "rgba(30, 144, 255, 1)", // Dodger Blue
  "rgba(50, 205, 50, 1)", // Lime Green
  "rgba(255, 165, 0, 1)", // Orange
  "rgba(138, 43, 226, 1)", // Blue Violet
  "rgba(255, 20, 147, 1)", // Deep Pink
];

// Hàm điều chỉnh màu với các thông số sáng, sắc độ, tương phản, trong suốt
const adjustColor = (
  rgba: string,
  brightness: number,
  saturation: number,
  contrast: number,
  opacity: number
): string => {
  const match = rgba.match(/\d+/g);
  if (!match) return rgba;

  let [r, g, b, a] = match.map(Number);

  // Điều chỉnh độ sáng
  r = Math.min(255, Math.max(0, r * brightness));
  g = Math.min(255, Math.max(0, g * brightness));
  b = Math.min(255, Math.max(0, b * brightness));

  // Chuyển đổi RGB sang HSL để điều chỉnh sắc độ
  const [h, s, l] = rgbToHsl(r, g, b);
  const adjustedSaturation = Math.min(1, Math.max(0, s * saturation));

  // Chuyển đổi lại thành RGB sau khi điều chỉnh sắc độ
  const [newR, newG, newB] = hslToRgb(h, adjustedSaturation, l);

  // Điều chỉnh độ tương phản
  const applyContrast = (value: number) => {
    return Math.min(255, Math.max(0, (value - 128) * contrast + 128));
  };

  r = applyContrast(newR);
  g = applyContrast(newG);
  b = applyContrast(newB);

  // Trả về chuỗi màu đã được điều chỉnh
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

// Chuyển đổi RGB sang HSL
const rgbToHsl = (
  r: number,
  g: number,
  b: number
): [number, number, number] => {
  r /= 255;
  g /= 255;
  b /= 255;
  const max = Math.max(r, g, b),
    min = Math.min(r, g, b);
  let h,
    s,
    l = (max + min) / 2;

  if (max === min) {
    h = s = 0;
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
      default:
        h = 0;
    }
    h /= 6;
  }

  return [h, s, l];
};

// Chuyển đổi HSL sang RGB
const hslToRgb = (
  h: number,
  s: number,
  l: number
): [number, number, number] => {
  let r, g, b;
  if (s === 0) {
    r = g = b = l;
  } else {
    const hue2rgb = (p: number, q: number, t: number) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };

    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;

    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
};

// Hook chính
export function useSmoothColorTransition(
  interval = 3000,
  brightness = 1,
  saturation = 1,
  contrast = 1,
  opacity = 1
) {
  const [color, setColor] = useState(
    adjustColor(baseColors[0], brightness, saturation, contrast, opacity)
  );
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const changeColor = () => {
      const nextIndex = (index + 1) % baseColors.length;
      setIndex(nextIndex);
      setColor(
        adjustColor(
          baseColors[nextIndex],
          brightness,
          saturation,
          contrast,
          opacity
        )
      );
    };

    const colorInterval = setInterval(changeColor, interval);
    return () => clearInterval(colorInterval);
  }, [index, interval, brightness, saturation, contrast, opacity]);

  return color;
}
