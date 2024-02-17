import { useCallback, useState } from "react";
import { Button } from "@/core/forms/Button";
import { ButtonGroup } from "@/core/forms/ButtonGroup";
import { BaseForm } from "@/components/register-page/BaseForm";

export default function RegisterPage() {
    const [step, setStep] = useState<number>(0);

    const onPrevBtnClick = useCallback(() => {
        setStep((step) => step - 1);
    }, []);
    const onNextBtnClick = useCallback(() => {
        setStep((step) => step + 1);
    }, []);

    return (
        <>
            {step === 0 && <BaseForm />}
            {/* {step === 1 && <} */}

            <ButtonGroup>
                <Button variant="stroke" width="45%" onClick={onPrevBtnClick}>
                    이전
                </Button>
                <Button variant="filled" width="45%" onClick={onNextBtnClick}>
                    다음
                </Button>
            </ButtonGroup>
        </>
    );
}
