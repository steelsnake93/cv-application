import { styled } from "@phntms/css-components";

import buttonStyles from "./button.module.css";

function useButton() {
    const Button = styled("button", {
        css: buttonStyles.btn,
        variants: {
            primary: {
                true: buttonStyles.primary,
            },
            secondary: {
                true: buttonStyles.secondary,
            },
            destructive: {
                true: buttonStyles.destructive,
            },
            ghost: {
                true: buttonStyles.ghost,
            },
            outline: {
                true: buttonStyles.outline
            },
        },
    })
    return Button
}
export { useButton }