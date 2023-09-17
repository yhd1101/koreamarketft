import React from "react";

const LABEL_CLASS = `duration absolute top-px left-2 -translate-y-1/2 scale-75 bg-white px-1 transition-all origin-left	
peer-placeholder-shown:top-7 peer-placeholder-shown:left-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-slate-500
peer-focus:top-px peer-focus:left-2 peer-focus:scale-75 peer-focus:text-violet-500 pointer-events-none	`;

const Input = (
        {
            labelText,
            className,
            type,
            ariaInvalid,
            error,
            value,
            disabled,
            autocomplete,
            autofocus,
            inputClassName,
            ...props
        }
    ) => {
        return (
            <>
                <div
                    className={`${error ? "animate-shake" : ""} ${
                        className ?? ""
                    } relative`}
                >
                    <input
                        {...props}
                        className={`peer w-full rounded-lg ${
                            error ? "border-red-500" : ""
                        } ${inputClassName ?? ""}`}
                        type={type}
                        aria-invalid={!ariaInvalid ? undefined : error ? "true" : "false"}
                        placeholder=" "
                        value={value}
                        disabled={disabled}
                        autoFocus={autofocus}
                        autoComplete={autocomplete}
                    />
                    <label className={LABEL_CLASS}>{labelText}</label>
                    {error && (
                        <small
                            role="alert"
                            className={`${error ? "animate-shake" : ""} text-red-500`}
                        >
                            {error}
                        </small>
                    )}
                </div>
            </>
        );
    }


export default Input;