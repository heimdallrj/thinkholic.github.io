import HomeLayout from 'layouts/Home';
import {
  Box,
  Card,
  Avatar,
  InfoWrap,
  Info,
  SocialLinks,
  Icon,
  Svg,
} from 'styles/home.styled';

export default function Home() {
  return (
    <HomeLayout>
      <Box>
        <Card>
          <Avatar />
          <InfoWrap>
            <Info>Indi, Software Engineer</Info>
            <Info>Currently based in Colombo, Sri Lanka</Info>

            <SocialLinks>
              <Icon>
                <a
                  href='https://linkedin.com/in/thinkholic/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <Svg
                    className='SVGInline-svg'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 1000 1000'
                  >
                    <path d='M1000 500c0 277-223 500-500 500S0 777 0 500 223 0 500 0s500 223 500 500zM375 260c-1-41-32-73-83-73-50 0-83 32-83 73s32 73 82 73h1c51 0 83-32 83-73zm-21 136H229v354h125V396zm458 166c0-114-56-187-146-187-50 0-87 30-104 75l-4-54H434c1 13 3 83 3 83v271h125V562c0-50 23-83 62-83 38 0 63 20 63 83v188h125V562z'></path>
                  </Svg>
                </a>
              </Icon>
              <Icon>
                <a
                  href='https://github.com/thinkholic'
                  target='_blank'
                  rel='noreferrer'
                >
                  <Svg
                    className='SVGInline-svg'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 1000 1000'
                  >
                    <path d='M1000 508c0 232-160 429-375 485V862c0-41-10-98-52-131 134-20 239-99 239-223 0-51-21-102-58-144 11-47 17-105-4-148-53 5-106 32-145 56-33-8-67-14-105-14s-73 6-106 14c-39-24-91-51-144-56-21 43-16 101-5 148-37 42-57 93-57 144 0 124 105 203 239 223-20 15-32 36-40 57-105 2-189-81-190-81-5-4-12-5-16-2-6 3-9 10-7 16 2 5 44 124 201 172v100C160 937 0 740 0 508 0 233 223 8 500 8c275 0 500 225 500 500z'></path>
                  </Svg>
                </a>
              </Icon>
              <Icon>
                <a
                  href='https://goodreads.com/user/show/2448917-kasun'
                  target='_blank'
                  rel='noreferrer'
                >
                  <Svg
                    className='SVGInline-svg'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 1000 1000'
                  >
                    <path d='M630 342c5 19 8 40 8 60 0 22-3 43-8 65-5 21-13 41-24 58s-25 31-43 41c-17 11-39 16-64 16s-46-5-63-16c-17-10-30-24-40-41-11-17-18-36-22-57s-6-42-6-63c0-23 2-44 7-64 5-21 14-39 25-54 11-16 25-28 42-38 18-9 39-14 63-14s45 5 62 15c16 9 30 22 41 38 10 16 18 34 22 54zm370 158c0 276-224 500-500 500S0 776 0 500 224 0 500 0s500 224 500 500zM713 179h-72v66h-1c-14-26-33-45-57-58-25-13-52-19-81-19-41 0-75 7-102 23-28 15-50 35-67 58-16 24-28 50-36 79-7 30-10 58-10 85 0 32 4 62 13 91 8 28 21 53 39 74 17 22 39 39 65 51 25 13 56 19 91 19 30 0 58-7 85-20 26-14 46-35 59-63h2v30c0 26-2 50-7 71-6 22-14 40-25 56-12 15-26 27-43 36-18 8-39 13-64 13-13 0-26-2-40-4-14-3-27-7-38-13-12-6-22-14-30-24-8-9-12-21-13-35h-76c1 25 7 47 19 64s28 32 46 42c18 11 38 19 61 24 22 5 45 7 66 7 75 0 129-19 164-57 35-37 52-94 52-171V179z'></path>
                  </Svg>
                </a>
              </Icon>
            </SocialLinks>
          </InfoWrap>
        </Card>
      </Box>
    </HomeLayout>
  );
}
