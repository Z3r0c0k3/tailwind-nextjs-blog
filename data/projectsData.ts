interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}
//이미지 프레임 사이즈 16 X 9
const projectsData: Project[] = [
  {
    title: "D-DAY 수능",
    description: `2024학년도 웹프실 프로젝트 - 수능|모의고사 D-DAY 사이트`,
    imgSrc: "https://i.imgur.com/ZgrCbPH.png",
    href: "https://github.com/images/Z3r0c0k3/d-day-suneung",
  },
  {
    title: "pwnable docker server",
    description: `CG2023 - pwnable 문제를 풀 때 필요한 도구가 설치된 서버 docker 이미지`,
    imgSrc: "https://i.imgur.com/iBRUfhc.png",
    href: "https://github.com/Z3r0c0k3/2023-cg-pwn",
  },
  {
    title: "K-mean algorithm DEMO",
    description: `2024학년도 알고리즘 발표회 출품작 - K-means clustering DEMO`,
    imgSrc: "https://i.imgur.com/Ah83CY0.png",
    href: "https://github.com/Z3r0c0k3/algorithm-pt",
  },
  {
    title: "E2EE Chat",
    description: `2024학년도 제 50회 덕영제 출품작 - 종단 간 암호화 지원 채팅 서비스`,
    href: "https://github.com/Z3r0c0k3/E2EE-chat",
  },
  {
    title: "pns-coin-toss",
    description: `확통 교과 연계 프로젝트 - 확률론을 이용한 동전 던지기 시뮬레이터`,
    href: "https://github.com/Z3r0c0k3/pns-coin_toss.git",
  },
  {
    title: "Minecraft Automation",
    description: `개인 프로젝트 - 마인크래프트 서버 백업 자동화 소프트웨어`,
    href: "https://github.com/Z3r0c0k3/algorithm-pthttps://github.com/Z3r0c0k3/mc_automation",
  },
]

export default projectsData
