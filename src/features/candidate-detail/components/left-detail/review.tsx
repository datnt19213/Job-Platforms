"use client";
import { ButtonBase } from "@/components/customs/Buttons";
import { FlexLayout } from "@/components/customs/FlexLayout";
import {Button} from "@/components/ui/button";
import {Checkbox} from "@/components/ui/checkbox";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {Textarea} from "@/components/ui/textarea";
import {Star} from "lucide-react";
import React, {useState} from "react";

export const Review = () => {
	const [rating, setRating] = useState<number>(5);
	const [name, setName] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [comment, setComment] = useState<string>("");
	const [saveInfo, setSaveInfo] = useState<boolean>(false);
  const [hoverRating, setHoverRating] = useState<number>(0)

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log({rating, name, email, comment, saveInfo});
		// Handle form submission logic here
	};

	return (
		<FlexLayout direction="col" className="w-full mx-auto p-[15px] 1200:active bg-white rounded-[8px] 1200:rounded-[18px] border border-gray-100">
			<span className="font-semibold text-[18px] 1200:text-[30px] mb-[15px] ">Be the first to review "Robert Fox"</span>

			<form>
				<div className="mb-6">
          <div className="flex items-center gap-2 mb-1">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <div
                  key={star}
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHoverRating(star)}
                  className="!p-0 cursor-pointer focus:outline-none transition-transform hover:scale-110"
                  onMouseLeave={() => setHoverRating(0)}
                  aria-label={`Rate ${star} out of 5 stars`}
                >
                  <Star
                    size={30}
                    strokeWidth={1}
                    className={`transition-colors duration-200 ${
                      (hoverRating > 0 ? hoverRating : rating) >= star
                        ? "fill-amber-400 text-amber-400"
                        : "text-gray-300 hover:text-amber-200"
                    }`}
                  />
                </div>
              ))}
            </div>
            <span className="text-sm text-gray-600">Your Rating</span>
          </div>
        </div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
					<div className="space-y-2">
						<Label htmlFor="name">Your Name</Label>
						<Input
							id="name"
							placeholder="Name"
							value={name}
							onChange={(e) => setName(e.target.value)}
							className="focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-blue-hover border shadow-none outline-none min-h-[50px] bg-slate-50 focus:bg-white transition-all"
							required
						/>
					</div>
					<div className="space-y-2">
						<Label htmlFor="email">Your Email</Label>
						<Input
							id="email"
							type="email"
							placeholder="Email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							className="focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-blue-hover border shadow-none outline-none min-h-[50px] bg-slate-50 focus:bg-white transition-all"
							required
						/>
					</div>
				</div>

				<div className="flex items-center space-x-2 mb-4">
					<Checkbox
						id="save-info"
						checked={saveInfo}
						onCheckedChange={(checked) => setSaveInfo(checked as boolean)}
					/>
					<Label htmlFor="save-info" className="text-sm text-gray-600">
						Save my name, email, and website in this browser for the next time I comment.
					</Label>
				</div>

				<div className="space-y-2 mb-6">
					<Label htmlFor="comment">Your Comment</Label>
					<Textarea
						id="comment"
						placeholder="Comment"
						value={comment}
						onChange={(e) => setComment(e.target.value)}
						className="min-h-[150px] focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-blue-hover border shadow-none outline-none bg-slate-50 focus:bg-white transition-colors"
						required
					/>
				</div>

				<ButtonBase onClick={handleSubmit} >
					Submit Review
				</ButtonBase>
			</form>
		</FlexLayout>
	);
};
