// import styled from "styled-components";
// import { useRecoilState } from "recoil";
// import { moveModalState } from "../../../stores/atoms";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import ItemButton2 from "../Button/Button2";
// import ItemButton1 from "../Button/Button1";
// import axios from "axios";
// export const PWCheckModal = () => {
//   const navigate = useNavigate();  

//   const [goPage, setGoPage] = useRecoilState(moveModalState);
//   const [pwCheckValue, setPwCheckValue] = useState("");
//   const [confirmPasswordErrorMessage, setConfirmPasswordErrorMessage] = useState("");

//   const accessToken = localStorage.getItem("accessToken");  
//   const memberId=localStorage.getItem("memberId");   
//   const bcrypt = require('bcryptjs');


//   const openModalHandler = () => {
//     setGoPage(!goPage);
//   };
//   const onChangePwvalue = (e) => {
//     const value = e.target.value;
//     setPwCheckValue(value);
//   };

//   const onClickDeleteUser = () => {
//     axios
//     .get(
//       `${process.env.REACT_APP_API_URL}/member/${memberId}`,
//       {
//         headers: {
//           Authorization: accessToken,
//         },
//       }
//     )
//     .then((res) => {
//       const hashedPassword = res.data.password;
//       const isPasswordMatch = bcrypt.compareSync(pwCheckValue, hashedPassword);
//       console.log(isPasswordMatch)
//       if (isPasswordMatch) {
//         // Passwords match
//         console.log('Password match');
//         axios
//           .delete(`${process.env.REACT_APP_API_URL}/member/profile/${memberId}`, {
//             headers: {
//               Authorization: accessToken,
//             },
//             data: {
//               password: pwCheckValue,
//             },
//           })
//           .then((res) => {
//             alert('회원이 탈퇴되었습니다.');
//             setGoPage(!goPage);
//             navigate('/');
//           })
//           .catch((error) => {
//             console.log(error);
//           });
//       } else {
//         // Passwords don't match
//         setConfirmPasswordErrorMessage('비밀번호가 일치하지 않습니다.');
//         console.log('Password mismatch');
//         console.log(res.data.password);
//         console.log(pwCheckValue);
//       }
//     })
//     .catch((error) => {
//       console.log(error);
//     });
//   }
//   return (
//     <ModalWrapper>
//       <ModalContainer>
//         <WarningText>
//           {confirmPasswordErrorMessage
//             ? confirmPasswordErrorMessage
//             : "*회원을 탈퇴합니다"}
//         </WarningText>
//         비밀번호를 입력하세요
//         <ContainerContnet>
//           비밀번호:
//           <PWArea
//             type="password"
//             value={pwCheckValue}
//             onChange={onChangePwvalue}
//           ></PWArea>
//         </ContainerContnet>
//         <ButtonArea>
//           <Cancellation onClick={openModalHandler}>
//             <ItemButton2 name={"취소"} />
//           </Cancellation>
//           <Permit onClick={onClickDeleteUser}>
//             <ItemButton1 name={"확인"} />
//           </Permit>
//         </ButtonArea>
//       </ModalContainer>
//     </ModalWrapper>
//   );
// };

// const ModalWrapper = styled.div`
//   display: flex;
//   width: 100%;
//   height: 100%;
//   background-color: var(--blackCover-color);
//   justify-content: center;
//   align-items: center;
//   position: fixed;
//   max-width: 1024px;
//   z-index: 2;
// `;

// const ModalContainer = styled.div`
//   display: flex;
//   width: 338px;
//   height: 170px;
//   background-color: var(--white1-color);
//   flex-direction: column;
//   border-radius: 10px;
//   position: relative;
//   padding: 0 1rem;
//   font-size: 20px;
//   font-weight: bold;
// `;

// const ContainerContnet = styled.div`
//   padding-top: 0.5rem;
//   padding-bottom: 1rem;
//   font-size: 17px;
//   font-weight: 400;
//   display: flex;
//   align-items: center;
// `;
// const ButtonArea = styled.div`
//   display: flex;
//   justify-content: space-between;
// `;
// const Cancellation = styled.div`
//   > div {
//     width: 148px;
//     height: 46px;
//   }
// `;
// const Permit = styled.div`
//   > div {
//     width: 148px;
//     height: 46px;
//   }
// `;
// const PWArea = styled.input`
//   height: 2rem;
//   width: 14.5rem;
//   background-color: var(--white1-color);

//   margin-left: 0.25rem;
// `;
// const WarningText = styled.div`
//   font-size: 13px;
//   color: var(--red1-color);
//   padding: 0.5rem 0;
//   display: flex;
//   justify-content: center;
// `;
