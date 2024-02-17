import { birth, dormitory, studentId, university } from "@/constants/baseform";
import { Label } from "@/core/forms/Label";
import { Select } from "@/core/forms/Select";
import { Paragraph } from "@/core/typography/Paragraph";
import { Text } from "@/core/typography/Text";

export const BaseForm = () => {
    return (
        <>
            <Label size="m">기숙사</Label>
            <Select>
                <option selected>기숙사를 선택해주세요</option>
                {dormitory.map((value, index) => {
                    return (
                        <option key={index} value={value}>
                            {value}
                        </option>
                    );
                })}
            </Select>

            <Label size="m">단과대학</Label>
            <Select>
                <option selected>단과대학을 선택해주세요</option>
                {university.map((value, index) => {
                    return (
                        <option key={index} value={value}>
                            {value}
                        </option>
                    );
                })}
            </Select>

            <Label size="m">생년월일</Label>
            <Select>
                <option selected>생년월일을 선택해주세요</option>
                {birth.map((value, index) => {
                    return (
                        <option key={index} value={value.value}>
                            {value.text}
                        </option>
                    );
                })}
            </Select>

            <Label size="m">학번</Label>
            <Select>
                <option selected>학번을 선택해주세요</option>
                {studentId.map((value, index) => {
                    return (
                        <option key={index} value={value.value}>
                            {value.text}
                        </option>
                    );
                })}
            </Select>
        </>
    );
};
