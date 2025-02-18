$(document).ready(function() {
    function initializeProjects() {
        const projects = [
            {
                title: "Project 1",
                period: "2024.01 - 2024.02",
                skills: ["HTML5", "SCSS", "JavaScript", "React"],
                contribution: "100%",
                role: "Frontend Developer",
                description: "프로젝트에 대한 상세 설명과 작업 이슈 해결 과정",
                link:"https://naver.com"
            },
            {
                title: "Project 2",
                period: "2024.01 - 2024.02",
                skills: ["HTML5", "SCSS", "JavaScript", "React"],
                contribution: "100%",
                role: "Frontend Developer",
                description: "프로젝트에 대한 상세 설명과 작업 이슈 해결 과정프로젝트에 대한 상세 설명과 작업 이슈 해결 과정프로젝트에 대한 상세 설명과 작업 이슈 해결 과정프로젝트에 대한 상세 설명과 작업 이슈 해결 과정프로젝트에 대한 상세 설명과 작업 이슈 해결 과정"
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