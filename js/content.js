$(document).ready(function() {
    function initializeProjects() {
        const projects = [
            {
                title: "SSF샵(삼성물산 온라인 쇼핑몰)",
                period: "2019.11 - 2022.04",
                skills: ["HTML5", "CSS", "JavaScript", "jQuery"],
                contribution: "100%",
                role: "Publisher",
                description: "브랜드별 분기 이벤트 페이지 제작 시, 섬세한 인터랙션 구현에 중점을 두었습니다. 각 이미지와 텍스트 요소마다 차별화된 모션과 페이드 효과를 적용하여 시각적 조화를 이루고자 했습니다. 구현 과정에서는 프로토타입을 먼저 제작하여 기획팀과 긴밀히 협의하였고, 이를 통해 자연스러운 움직임이 구현되기 어려운 부분들을 미리 파악하고 대안을 모색했습니다. 이러한 선제적인 기술 검토와 부서 간 원활한 커뮤니케이션을 통해 완성도 높은 이벤트 페이지를 구현할 수 있었습니다.",
                link:"https://www.ssfshop.com/main"
            },
            {
                title: "피나트(콘텐츠 펀딩)",
                period: "2022.10 - 2023.05",
                skills: ["HTML5", "SCSS", "JavaScript", "jQuery", "php"],
                contribution: "100%",
                role: "Publisher",
                description: "콘텐츠 펀딩 플랫폼 '피나트' 웹사이트의 전반적인 리뉴얼을 진행했습니다. 기획 단계부터 참여하여 사용자 경험 개선을 위한 UI/UX를 재정립하였으며, 백엔드 개발자와의 긴밀한 협업을 통해 안정적인 데이터 연동을 구현했습니다. 특히 펀딩 프로세스의 사용성 개선과 반응형 디자인 적용에 주력하여, 다양한 디바이스에서 일관된 서비스 경험을 제공할 수 있도록 했습니다.",
                link:"https://www.ian.re.kr/index_ag.php"
            },
            {
                title: "나이스지키미, 나이스아이핀, 나이스아이디, 나이스API",
                period: "2023.05 - 2024.05",
                skills: ["HTML5", "SCSS", "CSS", "JavaScript", "jQuery"],
                contribution: "100%",
                role: "Publisher",
                description: "대규모 금융 플랫폼 '지키미'의 유지보수와 대환대출 서비스 구축(약 20페이지)을 담당했습니다. 방대한 레거시 코드베이스에서 작업해야 하는 환경적 제약이 있었으나, 기존 코드를 체계적으로 분석하고 멀티클래스 활용을 통해 클래스 충돌 문제를 효과적으로 해결했습니다. 특히 데이터 처리가 필요한 화면이 많았기에, 대용량 데이터 처리와 데이터 누락 상황 등 다양한 케이스에 대응할 수 있도록 설계했습니다. 또한 웹 접근성 준수를 위해 시맨틱 마크업에 중점을 두어 개발을 진행했습니다.<br/>그 외로도 아이핀, 아이디, API 등 나이스 그룹 계열 사이트도 리뉴얼 작업을 작업하였고 메일 작업이나 ",
                link:"https://www.credit.co.kr/"
            },
            {
                title: "토스 신규 유료 신용플러스서비스(하이브리드 웹)",
                period: "2024.03 - 2024.05",
                skills: ["HTML5", "SCSS", "JavaScript", "jQuery", "kramer"],
                contribution: "100%",
                role: "Publisher",
                description: "상세업무<br/>토스의 심플하고 세련된 디자인 기준에 맞춰 메인 서비스와 상세 페이지(총 10페이지)를 구현했습니다. 로딩 인터랙션과 아코디언 등 다양한 인터랙티브 요소들을 포함하여 사용자 경험을 향상시켰습니다.<br/><br/>이슈 및 해결 방법<br/>웹뷰 환경에서의 반응형 구현 시 발생하는 도전과제에 직면했습니다. 특히 로딩 애니메이션과 텍스트 인터랙션의 반응형 처리를 위해, 정적인 미디어쿼리 대신 JavaScript를 활용한 동적 높이 조절 방식을 도입했습니다. 이를 통해 페이지 로드 및 리사이즈 시 화면 크기에 최적화된 인터랙션을 구현할 수 있었습니다.<br/><br/>주요 작업 내용<br/>Framer를 통해 전달받은 디자인 시안을 정확하게 구현하는데 주력했습니다. 토스의 개발 방식과 컨벤션을 철저히 분석하고 준수하여, 기존 서비스와의 일관성을 유지하며 작업을 진행했습니다."
            },
            {
                title: "카카오뱅크 소호 신용플러스서비스(하이브리드 웹)",
                period: "2023.12 - 2024.03",
                skills: ["HTML5", "SCSS", "JavaScript", "jQuery"],
                contribution: "100%",
                role: "Publisher",
                description: "토스의 웹뷰 환경에 최적화된 페이지를 구현했습니다. 특히 로딩 애니메이션과 텍스트 인터랙션이 포함된 반응형 레이아웃 구현 시, 정적인 미디어쿼리 대신 JavaScript를 활용한 동적 높이 조절 방식을 도입했습니다. 이를 통해 페이지 로드와 리사이즈 시 화면 크기에 따른 유동적인 대응이 가능했습니다. 또한 Framer를 통해 전달받은 디자인 시안을 정확히 구현하는 한편, 토스의 개발 방식과 컨벤션을 철저히 준수하여 작업을 진행했습니다."
            },
        ];

        const $contentWrap = $('.content_wrap');
        const $intro = $('#intro');

        // 프로젝트 HTML 생성 및 추가
        projects.forEach(project => {
            const hasLink = project.link ? 'has-link' : '';
            const linkHTML = project.link ? `
                <div class="project_link">
                    <a href="${project.link}" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                        View Project
                    </a>
                </div>
            ` : '';

            const projectHTML = `
                <div class="project_item ${hasLink}">
                    ${linkHTML}
                    <div class="project_content">
                        <h3 class="project_title">
                            ${project.title}
                            <span>${project.period}</span>
                        </h3>
                        <div class="project_skills">
                            ${project.skills.map(skill => `<span class="skill">${skill}</span>`).join('')}
                        </div>
                        <div class="project_info">
                            <div class="info_item">
                                <h4>기여도</h4>
                                <p>${project.contribution}</p>
                            </div>
                            <div class="info_item">
                                <h4>역할</h4>
                                <p>${project.role}</p>
                            </div>
                        </div>
                        <p class="project_description">${project.description}</p>
                    </div>
                </div>
            `;
            
            $contentWrap.append(projectHTML);
        });

        // 인트로 애니메이션이 끝난 후 실행될 함수
        function showContent() {
            $intro.fadeOut(800, function() {
                $contentWrap.addClass('show');
            });
        }

        // 인트로 타이머 설정
        setTimeout(showContent, 3000);
    }

    // 초기화
    initializeProjects();
});