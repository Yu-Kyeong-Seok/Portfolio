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
                background: "project1-bg.jpg"
            },
            // ... 추가 프로젝트 데이터
        ];

        const $contentWrap = $('.content_wrap');

        projects.forEach(project => {
            const projectHTML = `
                <div class="project_item">
                    <div class="project_bg" style="background-image: url(${project.background})"></div>
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

        // 인트로 애니메이션 완료 후 컨텐츠 표시
        setTimeout(() => {
            $contentWrap.addClass('show');
        }, 3500); // 인트로 애니메이션 시간(3000ms) + 약간의 여유(500ms)
    }

    initializeProjects();
});