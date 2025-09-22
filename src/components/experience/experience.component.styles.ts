import styled from 'styled-components'

export const Main = styled.div.attrs(() => ({
  className: 'Main',
}))`
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 992px) {
        margin-top: 4rem;
        text-align: center;
    }
`;

export const Content = styled.div.attrs(() => ({
  className: 'Content',
}))`
    display: flex;
    flex-direction: column;
    align-items: center;

    max-width: 75%;
    width: max-content;

    @media screen and (max-width: 992px) {
        width: calc(100% - 2rem);
        max-width: 37.5rem;

        margin-top: 2rem;
        padding: 0 1rem;
    }
`;

export const Title = styled.h1.attrs(() => ({
  className: 'Title',
}))`
    font-size: xxx-large;
    line-height: normal;
`;

export const Subtitle = styled.span.attrs(() => ({
  className: 'Subtitle',
}))`
    font-weight: 500;
    font-size: 1.1rem;
`;

export const Description = styled.p.attrs(() => ({
  className: 'Description',
}))`
    margin-top: 1rem;

    font-weight: 400;
`;

export const Highlight = styled.span.attrs(() => ({
  className: 'Highlight',
}))`
    width: fit-content;

    color: ${({theme}) => theme.colors.mainColor};
    font-weight: 500;
`;

export const Link = styled.a.attrs(() => ({
  className: 'Link',
}))`
    width: fit-content;

    color: ${({theme}) => theme.colors.mainColor};
    font-weight: 500;
    cursor: pointer;
    transition: 200ms;

    &:hover {
        color: ${({theme}) => theme.colors.secondaryColor};
    }
`;

export const ExperienceArea = styled.div.attrs(() => ({
  className: 'ExperienceArea',
}))`
    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    width: 100%;

    margin-top: 4rem;

    @media screen and (max-width: 992px) {
        margin-top: 0;
    }

`;

export const ExperienceBox = styled.div.attrs(() => ({
  className: 'ExperienceBox',
}))`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    width: 40rem;

    padding: 1rem;

    border-radius: 1rem;
    background: #73d7c40d;

    @media screen and (max-width: 992px) {
        width: calc(100% - 2rem);
        height: fit-content;
    }
`;

export const ExperienceBoxHeader = styled.span.attrs(() => ({
  className: 'ExperienceBoxHeader',
}))`
    display: flex;
    flex-direction: row;
    gap: 0.7rem;

    @media screen and (max-width: 992px) {
        align-items: center;
    }
`;

export const ExperienceBoxImg = styled.img.attrs(() => ({
  className: 'ExperienceBoxImg',
}))`
    width: 4rem;
    height: auto;
    border-radius: 0.5rem;
    
    object-fit: cover;
    pointer-events: none;

    @media screen and (max-width: 477px) {
        display: none;
    }
`;

export const ExperienceBoxTitle = styled.span.attrs(() => ({
  className: 'ExperienceBoxTitle',
}))`
    display: flex;
    flex-direction: column;
`;

export const ExperienceBoxTitleLabel = styled.span.attrs(() => ({
  className: 'ExperienceBoxTitleLabel',
}))`
    font-weight: 500;
`;


export const ExperienceBoxDescription = styled.p.attrs(() => ({
  className: 'ExperienceBoxDescription',
}))`
    margin-top: 0.5rem;
`;

export const ExperienceBoxIntro = styled.div.attrs(() => ({
  className: 'ExperienceBoxIntro',
}))`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: max-content;
    min-width: 100%;

    @media screen and (max-width: 992px) {
        display: flex;
        flex-direction: column;
    }

    @media screen and (max-width: 477px) {
        gap: .5rem;
        text-align: center;
    }
`;

export const ExperienceBoxCompany = styled.p.attrs(() => ({
  className: 'ExperienceBoxCompany',
}))`
    font-weight: 500;
    font-size: 0.9rem;

    @media screen and (max-width: 992px) {
        text-align: center;
    }
`;

export const ExperienceBoxResume = styled.div.attrs(() => ({
  className: 'ExperienceBoxResume',
}))`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media screen and (max-width: 992px) {
        text-align: center;
    }
`;

export const TimelineArea = styled.div.attrs(() => ({
  className: 'TimelineArea',
}))`
    position: relative;
    
    display: flex;
    align-items: center;
    gap: 6rem;

    margin: auto;
`;

export const LineUi = styled.div.attrs(() => ({
  className: 'LineUi',
}))`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    width: .5rem;
    height: -webkit-fill-available;

    margin: 8.5rem 0;
    background: #4f4f4f;
    border-radius: 5rem;

    @media screen and (max-width: 992px) {
        display: none;
    }
`;

export const CircleUi = styled.div.attrs(() => ({
  className: 'CircleUi',
}))`
    display: flex;
    
    width: 2rem;
    height: 2rem;

    margin-left: -0.75rem;
    background: #4f4f4f;
    border-radius: 1rem;
`;

export const TimelineBox = styled.div.attrs(() => ({
  className: 'TimelineBox',
}))`
    display: flex;
    flex-direction: column;
    align-items: center;


    width: fit-content;

    padding-bottom: 4rem;
    margin-top: 2rem;
    gap: 1rem;

    overflow: hidden;

    text-align: justify;

    &::-webkit-scrollbar {
        display: none;
    }

    @media screen and (max-width: 992px) {
        flex-wrap: nowrap;
        flex-direction: column;

        max-width: calc(100vw - 2rem);
    }
`;

export const Intro = styled.div.attrs(() => ({
  className: 'Intro',
}))`
    display: flex;
    flex-direction: column;

    width: 100%;

    text-align: start;

    @media screen and (max-width: 992px) {
        text-align: justify;
    }
`;
