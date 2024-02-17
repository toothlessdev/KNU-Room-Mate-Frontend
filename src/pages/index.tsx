import styled from "@emotion/styled";

import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { Title } from "@/core/typography/Title";
import { Button } from "@/core/forms/Button";
import { css } from "@emotion/css";

export default function Home() {
    return (
        <div
            className={css`
                width: 100%;
                height: calc(100vh - 40px);
                display: flex;
                flex-direction: column;
                justify-content: space-between;
            `}>
            <Title>KNU ROOM MATE</Title>

            <div>
                <Button variant="filled" width="100%">
                    카카오로 로그인하기
                </Button>
                <Button variant="stroke" width="100%">
                    룸메이트 둘러보기
                </Button>
            </div>
        </div>
    );
}
