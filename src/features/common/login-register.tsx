"use client";
import React, { useState } from 'react';

import {
  BriefcaseBusiness,
  Eye,
  EyeOff,
  User2,
} from 'lucide-react';

import { ButtonBase } from '@/components/customs/Buttons';
import { FlexLayout } from '@/components/customs/FlexLayout';
import { GridLayout } from '@/components/customs/GridLayout';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useLoginRegisterState } from '@/stores/state';
import {
  REGEXS,
  useFormValidator,
} from '@/utils/validator';

export const LoginRegister = () => {
	const {showModal, setShowModal} = useLoginRegisterState();
	const [isLogin, setIsLogin] = useState(true);

	return (
		<Dialog open={showModal} onOpenChange={setShowModal}>
			<DialogContent className="min-w-auto !max-w-[600px] !w-[90%] border-none shadow-light bg-white p-[40px]">
				<DialogHeader className='mb-[15px]'>
					{isLogin && <DialogTitle className='text-[18px] md:text-[24px] font-bold'>Login to Jopla</DialogTitle>}
					{!isLogin && <DialogTitle className='text-[18px] md:text-[24px] font-bold'>Create a free Jopla account</DialogTitle>}
				</DialogHeader>

        {isLogin && (
          <FlexLayout direction="col" className="bg-[#ccf5ef] rounded-[8px] py-[10px] px-[18px] gap-[5px]">
            <span className=" text-gray-500 text-[14px] font-semibold cursor-pointer" onClick={() => setShowModal(false)}>
              Username: <span className='font-bold text-[15px] text-[#27ceb4]'>candidate</span> or <span className='font-bold text-[#27ceb4]'>employer</span>
            </span>
            <span className=" text-gray-500 text-[14px] font-semibold cursor-pointer" onClick={() => setShowModal(false)}>
              Password: <span className='font-bold text-[15px] text-[#27ceb4]'>demo</span>
            </span>
          </FlexLayout>
        )}

				  {isLogin ? <LoginForm /> : <RegisterForm />}
  				{!isLogin && (
  					<FlexLayout
  						direction="row"
  						className="mt-[15px] text-gray-500 font-medium justify-center items-center"
  					>
  						Already have an account?&nbsp;
  						<span
  							className="text-blue-hover font-bold cursor-pointer"
  							onClick={() => setIsLogin(true)}
  						>
  							Login
  						</span>
  					</FlexLayout>
  				)}
  				{isLogin && (
  					<FlexLayout
  						direction="row"
  						className="mt-[15px] text-gray-500 font-medium justify-center items-center"
  					>
  						Don't you have an account?&nbsp;
  						<span
  							className="text-blue-hover font-bold cursor-pointer"
  							onClick={() => setIsLogin(false)}
  						>
  							Register
  						</span>
  					</FlexLayout>
  				)}
			</DialogContent>
		</Dialog>
	);
};

const LoginForm = () => {
	const {
		setShowModal,
	} = useLoginRegisterState();

	const [showPassword, setShowPassword] = useState(false);
  const {errors, values, handleChange, setValues, validateAllFields} = useFormValidator<{
    email: string;
    password: string;
    keepSignedIn: boolean
  }>({
    email: "",
    password: "",
    keepSignedIn: false
  }, 
  {
    email: {
      required: true,
      pattern: REGEXS.email
    },
    password: {
      required: true,
      pattern: REGEXS.password
    },
    keepSignedIn: {
      required: true
    }
  })

  const resetForm = () => {
    setValues({
      email: "",
      password: "",
      keepSignedIn: false
    })
  }

  function handleSubmit() {
    if (!validateAllFields()) {
      // 
    }

  }

	return (
		<FlexLayout direction="col" className="gap-[30px] w-full">
			<FlexLayout direction="col" className="gap-[10px] w-full">
				<Label htmlFor="login-email">
					Email&nbsp;<span className="text-red-500">*</span>
				</Label>
				<Input
          id="login-email"
					type="email"
					placeholder="Email"
					className="focus-visible:ring-0 relative z-[1] focus-visible:ring-offset-0 w-full bg-[#F0F5F7] shadow-none transition-all h-[60px] focus:bg-white border border-transparent focus:border-blue-hover rounded-[8px] px-[20px]"
          value={values.email}
          onChange={(e) => handleChange("email", e.target.value)}
				/>
			</FlexLayout>
			<FlexLayout direction="col" className="gap-[10px] w-full">
				<Label htmlFor="login-password">
					Password&nbsp;<span className="text-red-500">*</span>
				</Label>
				<div className="w-full relative">
					<Input
						id="login-password"
						type={showPassword ? "text" : "password"}
						placeholder="Password"
						className="focus-visible:ring-0 relative z-[1] focus-visible:ring-offset-0 w-full bg-[#F0F5F7] shadow-none transition-all h-[60px] focus:bg-white border border-transparent focus:border-blue-hover rounded-[8px] px-[20px]"
            value={values.password}
            onChange={(e) => handleChange("password", e.target.value)}
					/>
					{showPassword && (
						<Eye
							size={20}
							strokeWidth={1.5}
							className="absolute z-[2] right-[20px] top-1/2 -translate-y-1/2 cursor-pointer"
							onClick={() => setShowPassword(!showPassword)}
						/>
					)}
					{!showPassword && (
						<EyeOff
							size={20}
							strokeWidth={1.5}
							className="absolute z-[2] right-[20px] top-1/2 -translate-y-1/2 cursor-pointer"
							onClick={() => setShowPassword(!showPassword)}
						/>
					)}
				</div>
			</FlexLayout>
      <FlexLayout direction="row" justify="between" className="gap-[10px] items-center">
        <FlexLayout direction="row" className="gap-[10px] items-center">
          <Input
            type='checkbox'
            id="login-keep-signed-in"
            checked={values.keepSignedIn}
            className='h-[15px] w-[15px] accent-blue-dark rounded-md'
            onChange={() => handleChange("keepSignedIn", !values.keepSignedIn)}
          />
          <Label htmlFor="login-keep-signed-in" className='cursor-pointer pt-0.5'>Keep me signed in</Label>
        </FlexLayout>
        <span className="text-[14px] font-medium cursor-pointer">Forgot Password?</span>
      </FlexLayout>
			<ButtonBase
				variant="default"
				className="w-full"
				onClick={() => {
          handleSubmit();
					setShowModal(false);
					resetForm();
				}}
			>
				Login
			</ButtonBase>
		</FlexLayout>
	);
};
const RegisterForm = () => {
	const {setShowModal} = useLoginRegisterState();
	const [showPassword, setShowPassword] = useState(false);
	const [showPasswordConfirm, setShowPasswordConfrim] = useState(false);

  const {errors, values, handleChange, setValues, validateAllFields} = useFormValidator<{
    userType: "candidate" | "employer";
    email: string;
    password: string;
    passwordConfirm: string;
    acceptTerms: boolean
  }>({
    userType: "candidate",
	  email: "",
	  password: "",
	  passwordConfirm: "",
	  acceptTerms: false
  }, 
  {
   userType: {
    required: true,
    errorMessage: "Please select a user type",
   } 
,
	email: {
	  required: true,
	  pattern: REGEXS.email,
	  errorMessage: "Please enter a valid email"
	},
	password: {
	  required: true,
	  errorMessage: "Password is required"
	},
	passwordConfirm: {
	  required: true,
	  errorMessage: "Please confirm your password"
	},
	acceptTerms: {
	  required: true,
	  errorMessage: "You must accept the terms and conditions"
	}
  })

  const resetForm = () => {
    setValues({
      userType: "candidate",
      email: "",
      password: "",
      passwordConfirm: "",
      acceptTerms: false
    })
  }

	return (
		<FlexLayout direction="col" className="gap-[30px] w-full">
			<GridLayout columns={2} className="gap-[30px] w-full">
				<ButtonBase
					variant={values.userType === "candidate" ? "default" : "secondary"}
					className="w-full flex gap-[10px]"
					onClick={() => handleChange("userType","candidate")}
				>
					<User2 size={20} strokeWidth={1.5} />
					Candidate
				</ButtonBase>
				<ButtonBase
					variant={values.userType === "employer" ? "default" : "secondary"}
					className="w-full flex gap-[10px]"
					onClick={() => handleChange("userType",  "employer")}
				>
					<BriefcaseBusiness size={20} strokeWidth={1.5} />
					Employer
				</ButtonBase>
			</GridLayout>
			<FlexLayout direction="col" className="gap-[10px] w-full">
				<Label htmlFor="email">
					Email&nbsp;<span className="text-red-500">*</span>
				</Label>
				<Input
					id="email"
					placeholder="Email"
          type="email"
          value={values.email}
					className="focus-visible:ring-0 focus-visible:ring-offset-0 w-full bg-[#F0F5F7] shadow-none transition-all h-[60px] focus:bg-white border border-transparent focus:border-blue-hover rounded-[8px] px-[20px]"
					onChange={(e) => handleChange("email", e.target.value)}
				/>
			</FlexLayout>
			<FlexLayout direction="col" className="gap-[10px] w-full">
				<Label htmlFor="password">
					Password&nbsp;<span className="text-red-500">*</span>
				</Label>
				<div className="w-full relative">
					<Input
						type={showPassword ? "text" : "password"}
						id="password"
						placeholder="Password"
            value={values.password}
						className="relative z-[1] focus-visible:ring-0 focus-visible:ring-offset-0 w-full bg-[#F0F5F7] shadow-none transition-all h-[60px] focus:bg-white border border-transparent focus:border-blue-hover rounded-[8px] px-[20px]"
						onChange={(e) => handleChange("password",  e.target.value)}
					/>
					{!showPassword && (
						<Eye
							size={20}
							strokeWidth={1.5}
							className="absolute z-[2] right-[20px] top-1/2 -translate-y-1/2 cursor-pointer"
							onClick={() => setShowPassword(!showPassword)}
						/>
					)}
					{showPassword && (
						<EyeOff
							size={20}
							strokeWidth={1.5}
							className="absolute z-[2] right-[20px] top-1/2 -translate-y-1/2 cursor-pointer"
							onClick={() => setShowPassword(!showPassword)}
						/>
					)}
				</div>
			</FlexLayout>
			<FlexLayout direction="col" className="gap-[10px] w-full">
				<Label htmlFor="confirm-password">
					Confirm Password&nbsp;<span className="text-red-500">*</span>
				</Label>
				<div className="w-full relative">
					<Input
						type={showPasswordConfirm ? "text" : "password"}
						id="confirm-password"
						placeholder="Password"
            value={values.passwordConfirm}
						className="relative z-[1] focus-visible:ring-0 focus-visible:ring-offset-0 w-full bg-[#F0F5F7] shadow-none transition-all h-[60px] focus:bg-white border border-transparent focus:border-blue-hover rounded-[8px] px-[20px]"
					/>
					{showPasswordConfirm && (
						<Eye
							size={20}
							strokeWidth={1.5}
							className="absolute z-[2] right-[20px] top-1/2 -translate-y-1/2 cursor-pointer"
							onClick={() => setShowPasswordConfrim(!showPasswordConfirm)}
						/>
					)}
					{!showPasswordConfirm && (
						<EyeOff
							size={20}
							strokeWidth={1.5}
							className="absolute z-[2] right-[20px] top-1/2 -translate-y-1/2 cursor-pointer"
							onClick={() => setShowPasswordConfrim(!showPasswordConfirm)}
						/>
					)}
				</div>
			</FlexLayout>
			<FlexLayout direction="row" align="center" className="gap-[10px] w-full">
				<Input
					type="checkbox"
					id="terms-and-conditions"
          data-state={values.acceptTerms ? "checked" : "unchecked"}
          className='h-[15px] w-[15px] accent-blue-dark rounded-md'
					onChange={() =>
            handleChange("acceptTerms", !values.acceptTerms)
					}/>
				<Label htmlFor="terms-and-conditions" className='pt-0.5 cursor-pointer'>
					You accept our Terms and Conditions and Privacy Policy
				</Label>
			</FlexLayout>
			<ButtonBase
				variant="default"
				className="w-full"
				onClick={() => {
          setShowModal(false);
					resetForm();
				}}
			>
				Register
			</ButtonBase>
		</FlexLayout>
	);
};
