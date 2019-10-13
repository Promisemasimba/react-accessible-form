import * as React from "react";
import classNames from "classnames";

import { FormGroupContext } from "./FormGroupContext";

type Props = {
    as?: React.ElementType;
    children: React.ReactNode;
    className?: string;
};

export const FormLabel = React.forwardRef<HTMLElement, Props>((props: Props, ref) => {
    const { as = "label", className, ...rest } = props;
    const groupContext = React.useContext(FormGroupContext);

    if (!groupContext) {
        throw new Error("FormLabel must be used inside of a FormGroup");
    }

    const { disabled, id, required } = groupContext;

    return React.createElement(as, {
        htmlFor: id,
        className: classNames(
            "form__label",
            className,
            {
                "form__label--required": required,
            },
            { "form__label--disabled": disabled }
        ),
        ...rest,
        ref,
    });
});

FormLabel.displayName = "Form.Label";