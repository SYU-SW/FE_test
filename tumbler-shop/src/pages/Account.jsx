import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Stack, Text, Title, useMantineTheme } from '@mantine/core';

const Account = () => {
  const { colors, colorScheme } = useMantineTheme();

  // 상태 초기화 및 변경 함수
  const [changeMode, setChangeMode] = useState({ password: false, name: false, phone: false });

  // 모드 열기/닫기 이벤트 핸들러
  const handleOpenModeClick = label => setChangeMode({ ...changeMode, [label]: true });
  const handleCloseModeClick = label => setChangeMode({ ...changeMode, [label]: false });

  // 임시 데이터 (사용자 정보)
  const userInfo = {
    email: 'example@example.com',
    password: '******', // 실제로는 보안상 문제가 있으므로 이렇게 하지 않습니다.
    name: 'John Doe',
    phone: '123-456-7890'
  };

  return (
    <Stack pb="2rem" px="0.8rem" spacing="3.2rem" w="100%">
      {/* 계정 정보 제목 */}
      <Title fz="2.4rem" mb="3.2rem" pb="2rem" sx={{ borderBottom: `2px solid ${colors.gray[8]}` }}>
        계정 정보
      </Title>

      {/* 내 계정 정보 */}
      <Stack maw="50rem" pl="2rem">
        <Title fz="2rem" pb="0.8rem">
          내 계정
        </Title>
        <Text>Email: {userInfo.email}</Text>
        {changeMode.password ? (
          <Text>Password: {userInfo.password}</Text>
        ) : (
          <Text onClick={() => handleOpenModeClick('password')} style={{ cursor: 'pointer', textDecoration: 'underline' }}>
            비밀번호 변경
          </Text>
        )}
      </Stack>

      {/* 내 정보 */}
      <Stack maw="50rem" pl="2rem">
        <Title fz="2rem" pb="0.8rem">
          내 정보
        </Title>
        {changeMode.name ? (
          <Text>Name: {userInfo.name}</Text>
        ) : (
          <Text onClick={() => handleOpenModeClick('name')} style={{ cursor: 'pointer', textDecoration: 'underline' }}>
            이름 변경
          </Text>
        )}
        {changeMode.phone ? (
          <Text>Phone: {userInfo.phone}</Text>
        ) : (
          <Text onClick={() => handleOpenModeClick('phone')} style={{ cursor: 'pointer', textDecoration: 'underline' }}>
            전화번호 변경
          </Text>
        )}
      </Stack>

      {/* 회원탈퇴 링크 */}
      <Link to="/withdrawal">
        <Text c="gray.6" fz="1.4rem" pl="2rem" w="fit-content" sx={{ textDecoration: 'underline', cursor: 'pointer' }}>
          회원탈퇴
        </Text>
      </Link>
    </Stack>
  );
};

export default Account;
