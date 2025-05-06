"use client";
import { z, ZodType } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { toast, Toaster } from "sonner";

interface FormProps {
	//we cant do   type FormSchemaType = z.infer<typeof schema>;
	fullName: string;
	email: string;
	message: string;
}

const Contact = () => {
	const [loading, setLoading] = useState(false);
	const schema: ZodType<FormProps> = z.object({
		fullName: z
			.string()
			.min(2, " Full Name must contain at least 2 character(s"),
		email: z.string().email(),
		message: z.string().min(1, "Don't be shy write something!"),
	});

	const {
		register,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm<FormProps>({
		resolver: zodResolver(schema),
	});
	const submitData = async (data: FormProps) => {
		setLoading(true);

		try {
			const res = await fetch("/api/contact", {
				method: "POST",
				body: JSON.stringify(data),
				headers: {
					"content-type": "application/json",
				},
			});

			if (res.ok) {
				setLoading(false);
				toast.success("Email sent");
				console.log("it passed");
			}
		} catch (err) {
			toast.error("Message not sent please try again!");
			console.log("this is an error idiot try to fixe it", err);
		}

		reset();
	};

	return (
		<>
			<div className="">
				<Toaster position="bottom-left" />
				<form
					className="flex flex-col gap-2   rounded-xl ring-gray-300/60 dark:ring-gray-300/10"
					onSubmit={handleSubmit(submitData)}
				>
					<label htmlFor=""> <span className="font-thin">Full Name</span></label>
					{errors.fullName && (
						<span className="text-red-300">{errors.fullName.message}</span>
					)}
					<input
						type="text"
						className="py-2 pl-4 rounded-md ring-[1px] ring-gray-300/60 dark:ring-gray-300/10"
						placeholder="John Wick"
						{...register("fullName")}
					/>
					<label htmlFor=""><span className="font-thin">Email</span></label>
					{errors.email && (
						<span className="text-red-300">{errors.email.message}</span>
					)}
					<input
						type="email"
						className="py-2 pl-4 rounded-md ring-[1px] ring-gray-300/60 dark:ring-gray-300/10"
						placeholder="John-wick@continentalhotel.com"
						{...register("email")}
					/>
					<label htmlFor=""><span className="font-thin">Message</span></label>
					{errors.message && (
						<span className="text-red-300">{errors.message.message}</span>
					)}
					<textarea
						cols={20}
						rows={10}
						className="p-4 rounded-md ring-[1px] ring-gray-300/60 dark:ring-gray-300/10"
						placeholder="Write your message here."
						{...register("message")}
					></textarea>

					<button
						className="flex gradient-background ring-[1px] ring-gray-300/60 font-thin dark:ring-gray-300/10 self-end  items-center justify-center p-4 rounded-2xl bg-opacity-70 h-[50px] w-[100px]  cursor-pointer "
						type="submit"
					>
						{loading ? <Loader2 className=" animate-spin" /> : "Send"}
					</button>
				</form>
			</div>
		</>
	);
};

export default Contact;
