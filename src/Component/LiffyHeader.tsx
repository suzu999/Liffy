import React from "react";
import * as S from "./LiffyHeader.style"

const menu = [1,2,3]
const LiffyHeader = () =>{
    return(
        <S.LiffyHeaderContainer>
            <S.HeaderSection className="left">
                <S.Box/>
                <S.TitleWrapper>Liffy</S.TitleWrapper>
            </S.HeaderSection>
            <S.HeaderSection className="right">
                {menu.map((value:number, index:number)=>{
                    return <S.LongBox key={index}/>
                })}
            </S.HeaderSection>
        </S.LiffyHeaderContainer>

    )

}
export default LiffyHeader;