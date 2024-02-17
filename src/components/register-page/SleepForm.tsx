import { useState } from "react";
import { sleepHabit, sleepLight, sleepTime, wakeupTime } from "@/constants/sleepform";
import { Label } from "@/core/forms/Label";
import { Checkbox, CheckboxGroup, Flex, RangeSlider, RangeSliderFilledTrack, RangeSliderThumb, RangeSliderTrack, Slider, SliderFilledTrack, SliderThumb, SliderTrack } from "@chakra-ui/react";
import { Option, OptionMenu } from "@/core/forms/Option";
import { Select } from "@/core/forms/Select";

export const SleepForm = () => {
    const [wakeupMin, setWakeupMin] = useState<number>(0);
    const [wakeupMax, setWakeupMax] = useState<number>(9);

    const [sleepMin, setSleepMin] = useState<number>(0);
    const [sleepMax, setSleepMax] = useState<number>(6);

    return (
        <>
            <Label size="m">기상시간</Label>
            <Label size="s" weight="normal">
                {wakeupTime[wakeupMin].text} ~ {wakeupTime[wakeupMax].text} 사이 기상
            </Label>
            <RangeSlider
                defaultValue={[0, 9]}
                min={0}
                max={9}
                step={1}
                onChangeEnd={(e) => {
                    setWakeupMin(e[0]);
                    setWakeupMax(e[1]);
                }}>
                <RangeSliderTrack bg="red.100">
                    <RangeSliderFilledTrack bg="#d73a32" />
                </RangeSliderTrack>
                <RangeSliderThumb boxSize={6} index={0} />
                <RangeSliderThumb boxSize={6} index={1} />
            </RangeSlider>

            <Label size="m">취침시간</Label>
            <Label size="s" weight="normal">
                {sleepTime[sleepMin].text} ~ {sleepTime[sleepMax].text} 사이 취침
            </Label>
            <RangeSlider
                defaultValue={[0, 9]}
                min={0}
                max={9}
                step={1}
                onChangeEnd={(e) => {
                    setSleepMin(e[0]);
                    setSleepMax(e[1]);
                }}>
                <RangeSliderTrack bg="red.100">
                    <RangeSliderFilledTrack bg="#d73a32" />
                </RangeSliderTrack>
                <RangeSliderThumb boxSize={6} index={0} />
                <RangeSliderThumb boxSize={6} index={1} />
            </RangeSlider>

            <Label size="m">수면등</Label>
            <Select>
                <option selected>수면등을 선택해주세요</option>
                {sleepLight.map((value, index) => {
                    return (
                        <option key={index} value={value}>
                            {value}
                        </option>
                    );
                })}
            </Select>

            <Label size="m">잠귀</Label>
            <Flex justifyContent="space-between">
                <Label size="s" weight="normal" margin="0px">
                    어두움
                </Label>
                <Label size="s" weight="normal" margin="0px">
                    밝음
                </Label>
            </Flex>
            <Slider defaultValue={5} min={0} max={10} step={1}>
                <SliderTrack bg="red.100">
                    <SliderFilledTrack bg="#d73a32" />
                </SliderTrack>
                <SliderThumb boxSize={6} />
            </Slider>

            <Label size="m">잠버릇</Label>
            <Flex direction="column" gap="5px">
                <CheckboxGroup>
                    <Checkbox size="lg" colorScheme="red">
                        없음
                    </Checkbox>
                    {sleepHabit.map((value, index) => {
                        return (
                            <Checkbox key={index} size="lg" colorScheme="red">
                                {value}
                            </Checkbox>
                        );
                    })}
                </CheckboxGroup>
            </Flex>
        </>
    );
};
