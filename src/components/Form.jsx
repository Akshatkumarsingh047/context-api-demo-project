import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

function Form() {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      channel: "akshat singh",
      socials: {
        facebook: "hello world",
        instagram: "hiii",
      },
      phoneNumbers: ["", ""],
    },
  });
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <>
      <div className="  bg-[#dadada44]/30 space-y-3  flex flex-col items-center justify-center rounded-lg p-8">
        <form
          action=""
          className="flex flex-col justify-center items-center gap-4"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <div>
            <label htmlFor="name" className="mr-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="bg-[#dadada77] text-black px-1 font-semibold text-sm rounded-lg min-h-8 min-w-28"
              {...register("name", {
                required: {
                  value: "true",
                  message: "name is required",
                },
              })}
            />
            <p className="text-red-600 tracking-wider text-sm">
              {errors.name?.message}
            </p>
          </div>
          <div>
            <label htmlFor="email" className="mr-2">
              E-mail
            </label>
            <input
              type="text"
              id="email"
              className="bg-[#dadada77] text-black px-1 font-semibold text-sm rounded-lg min-h-8 min-w-28"
              {...register("email", {
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "email is invalid",
                },
                validate: (fieldValue) => {
                  return (
                    fieldValue != "admin@example.com" ||
                    "enter different e-mail"
                  );
                },
              })}
            />
            <p className="text-red-600 tracking-wider text-sm">
              {errors.email?.message}
            </p>
          </div>
          <div>
            <label htmlFor="channel" className="mr-2">
              channel
            </label>
            <input
              type="text"
              id="channel"
              className="bg-[#dadada77] text-black px-1 font-semibold text-sm rounded-lg min-h-8 min-w-28"
              {...register("channel", {
                required: "please fill the channel link",
              })}
            />
            <p className="text-red-600 tracking-wider text-sm">
              {errors.channel?.message}
            </p>
          </div>
          <div>
            <label htmlFor="facebook" className="mr-2">
              facebook
            </label>
            <input
              type="text"
              id="facebook"
              className="bg-[#dadada77] text-black px-1 font-semibold text-sm rounded-lg min-h-8 min-w-28"
              {...register("socials.facebook", {
                required: "please fill the channel link",
              })}
            />
            {/* <p className="text-red-600 tracking-wider text-sm">
              {errors.channel?.message}
            </p> */}
          </div>
          <div>
            <label htmlFor="instagram" className="mr-2">
              instagram
            </label>
            <input
              type="text"
              id="instagram"
              className="bg-[#dadada77] text-black px-1 font-semibold text-sm rounded-lg min-h-8 min-w-28"
              {...register("socials.instagram", {
                required: "please fill the channel link",
              })}
            />
            {/* <p className="text-red-600 tracking-wider text-sm">
              {errors.channel?.message}
            </p> */}
          </div>
          <div>
            <label htmlFor="primaryPhone" className="mr-2">
              primaryPhone
            </label>
            <input
              type="text"
              id="primaryPhone"
              className="bg-[#dadada77] text-black px-1 font-semibold text-sm rounded-lg min-h-8 min-w-28"
              {...register("phoneNumbers[0]", {
                required: "please fill the channel link",
              })}
            />
            {/* <p className="text-red-600 tracking-wider text-sm">
              {errors.channel?.message}
            </p> */}
          </div>
          <div>
            <label htmlFor="secondnumber" className="mr-2">
              second number
            </label>
            <input
              type="text"
              id="secondnumber"
              className="bg-[#dadada77] text-black px-1 font-semibold text-sm rounded-lg min-h-8 min-w-28"
              {...register("phoneNumbers[1]", {
                required: "please fill the channel link",
              })}
            />
            {/* <p className="text-red-600 tracking-wider text-sm">
              {errors.channel?.message}
            </p> */}
          </div>
          <button type="submit" className="px-4 py-1 bg-blue-600 rounded-md">
            submit
          </button>
        </form>
        <DevTool control={control} placement="top-right" />
      </div>
    </>
  );
}

export default Form;
