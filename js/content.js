function initializeSkillTooltips() {
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    let activeSkill = null;

    // PC 환경에서는 CSS hover로 처리되므로 모바일일 때만 처리
    if (isMobile) {
        const $skills = $('.skill');
        
        // 각 스킬에 클릭 이벤트 바인딩
        $skills.on('click', function(e) {
            e.stopPropagation();
            
            const $this = $(this);
            
            if ($this.hasClass('active')) {
                $this.removeClass('active');
                activeSkill = null;
                return;
            }

            if (activeSkill) {
                $(activeSkill).removeClass('active');
            }

            // project_skills의 너비 계산
            const $projectSkills = $(this).closest('.project_skills');
            const skillsWidth = $projectSkills.innerWidth();
            const tooltipWidth = 200; // 툴팁 최대 너비

            // 스킬의 상대적 위치 계산
            const skillOffset = $(this).position().left;
            const skillWidth = $(this).outerWidth();
            const skillCenter = skillOffset + (skillWidth / 2);

            let tooltipLeft;

            // 왼쪽에 너무 가까운 경우
            if (skillCenter < tooltipWidth / 2) {
                tooltipLeft = 0;
            }
            // 오른쪽에 너무 가까운 경우
            else if (skillCenter > skillsWidth - tooltipWidth / 2) {
                tooltipLeft = skillsWidth - tooltipWidth;
            }
            // 중앙에 있는 경우
            else {
                tooltipLeft = skillCenter - tooltipWidth / 2;
            }

            $this.css('--tooltip-left', `${tooltipLeft}px`);
            $this.addClass('active');
            activeSkill = this;
        });

        // 문서 클릭 시 툴팁 닫기
        $(document).on('click', function() {
            if (activeSkill) {
                $(activeSkill).removeClass('active');
                activeSkill = null;
            }
        });

        // 스크롤 시 활성화된 툴팁 닫기
        $(window).on('scroll', function() {
            if (activeSkill) {
                $(activeSkill).removeClass('active');
                activeSkill = null;
            }
        });
    }
}

$(document).ready(function() {
    function initializeProjects() {
        const projects = [
            {
                title: "마켓컬리(클론코딩 프로젝트)",
                period: "2024.10 - 2024.11",
                skills: [
                    {
                        name: "React",
                        description: "헤더, 바텀탭 등 공통 컴포넌트 개발 및 상태관리"
                    },
                    {
                        name: "Next.js",
                        description: "CSR에서 SSR로 전환하여 검색엔진 최적화(SEO) 구현"
                    },
                    {
                        name: "TypeScript",
                        description: "컴포넌트 props와 상태에 대한 타입 안정성 확보"
                    },
                    {
                        name: "SCSS",
                        description: "마켓컬리 디자인 시스템에 맞춘 반응형 스타일링"
                    },
                    {
                        name: "node.js",
                        description: "RESTful API 구현 및 백엔드 서버 환경 구축"
                    },
                    {
                        name: "mongoDB",
                        description: "상품 데이터 및 사용자 정보 데이터베이스 관리"
                    }
                ],
                contribution: "50%",
                role: "Front Developer",
                description: "상세업무<br/>파이널 프로젝트에서 6인 팀의 프론트엔드 팀장을 맡아 프로젝트를 이끌었습니다. 개발 효율성 향상을 위해 프론트엔드와 백엔드를 3명씩 분리하여 운영했으며, WBS를 통한 체계적인 일정 관리와 지속적인 진척도 모니터링을 통해 계획된 일정 내에 프로젝트를 완수했습니다. 특히 팀원들과의 원활한 커뮤니케이션을 통해 업무 진행 상황을 실시간으로 공유하고 이슈 발생 시 신속한 대응이 가능했습니다.<br/><br/>이슈 및 해결 방법<br/>초기에 Vite를 사용하여 프로젝트를 진행하던 중, 커머스 사이트의 핵심 기능인 검색엔진 최적화(SEO)의 중요성을 재인식하게 되었습니다. CSR 방식의 Vite 대신 SSR을 지원하는 Next.js로의 전환이 마켓컬리와 같은 이커머스 플랫폼에 더 적합하다고 판단했습니다. 팀원들과의 논의를 거쳐 기술 스택을 Next.js로 전환하는 결정을 내렸고, 이를 통해 더 나은 검색엔진 최적화와 사용자 경험을 제공할 수 있었습니다.<br/><br/>주요 작업 내용<br/>메인 홈페이지와 카테고리 페이지의 UI/UX를 구현하였으며, 헤더, 바텀탭, 스와이프 기능 등 핵심 공통 컴포넌트를 개발했습니다. 상품 표시 및 수량 카운터와 같은 커머스 특화 컴포넌트도 제작하였으며, RESTful API를 연동하여 데이터를 효율적으로 가공하고 관리했습니다. 또한 전반적인 프론트엔드 UI/UX 유지보수를 담당하여 일관된 사용자 경험을 제공하는데 주력했습니다.",
                link:"https://github.com/Yu-Kyeong-Seok/final-front"
            },
            {
                title: "토스 신규 유료 신용플러스서비스(하이브리드 웹)",
                period: "2024.03 - 2024.05",
                skills: [
                    {
                        name: "HTML5",
                        description: "토스의 컨벤션을 준수한 하이브리드 웹 마크업 구현"
                    },
                    {
                        name: "SCSS",
                        description: "토스의 심플한 디자인 시스템을 반영한 컴포넌트 스타일링"
                    },
                    {
                        name: "JavaScript",
                        description: "웹뷰 환경에서의 동적 높이 조절 및 로딩 인터랙션 구현"
                    },
                    {
                        name: "jQuery",
                        description: "아코디언 및 텍스트 인터랙션의 반응형 동작 처리"
                    },
                    {
                        name: "kramer",
                        description: "디자인 시안 검토 및 인터랙션 프로토타입 구현"
                    }
                ],
                contribution: "100%",
                role: "Publisher",
                description: "상세업무<br/>토스의 심플하고 세련된 디자인 기준에 맞춰 메인 서비스와 상세 페이지(총 10페이지)를 구현했습니다. 로딩 인터랙션과 아코디언 등 다양한 인터랙티브 요소들을 포함하여 사용자 경험을 향상시켰습니다.<br/><br/>이슈 및 해결 방법<br/>웹뷰 환경에서의 반응형 구현 시 발생하는 도전과제에 직면했습니다. 특히 로딩 애니메이션과 텍스트 인터랙션의 반응형 처리를 위해, 정적인 미디어쿼리 대신 JavaScript를 활용한 동적 높이 조절 방식을 도입했습니다. 이를 통해 페이지 로드 및 리사이즈 시 화면 크기에 최적화된 인터랙션을 구현할 수 있었습니다.<br/><br/>주요 작업 내용<br/>Framer를 통해 전달받은 디자인 시안을 정확하게 구현하는데 주력했습니다. 토스의 개발 방식과 컨벤션을 철저히 분석하고 준수하여, 기존 서비스와의 일관성을 유지하며 작업을 진행했습니다."
            },
            {
                title: "카카오뱅크 소호 서비스(하이브리드 웹)",
                period: "2023.12 - 2024.03",
                skills: [
                    {
                        name: "HTML5",
                        description: "웹 접근성 준수를 위한 시맨틱 태그 구조와 스크린리더 최적화"
                    },
                    {
                        name: "SCSS",
                        description: "safe-area 속성을 활용한 iOS 웹뷰 대응 및 반응형 스타일링"
                    },
                    {
                        name: "JavaScript",
                        description: "디바이스 환경 감지 및 iOS 웹뷰 대응 로직 구현"
                    },
                    {
                        name: "jQuery",
                        description: "키보드 접근성 향상을 위한 인터랙션 처리 및 이벤트 핸들링"
                    }
                ],
                contribution: "100%",
                role: "Publisher",
                description: "상세업무<br/>카카오뱅크 소호의 하이브리드 웹(웹뷰) 서비스 개발을 담당하여, 웹 접근성을 고려한 메인페이지 및 상세페이지(총 22페이지)를 구축했습니다. 모든 사용자가 불편함 없이 서비스를 이용할 수 있도록 접근성 최적화에 중점을 두었습니다.<br/><br/>이슈 및 해결 방법<br/>iOS 환경의 웹뷰에서 하단 고정 버튼이 홈바와 겹치는 문제가 발생했습니다. 이를 해결하기 위해 safe-area 속성을 활용한 레이아웃 조정과 함께, JavaScript를 이용해 디바이스를 동적으로 감지하고 iOS 전용 CSS 클래스를 적용하는 방식으로 해결했습니다.<br/><br/>주요 작업 내용<br/>웹 접근성 지침을 철저히 준수하여 시맨틱 태그 구조를 구현했으며, 특히 시각 장애인과 저시력자를 위한 키보드 조작성과 스크린 리더 호환성을 개선했습니다. iOS 환경에서의 UI 이슈를 해결하는 과정에서 팀원들과 긴밀히 협력하며 효과적인 해결책을 도출했습니다."
            },
            {
                title: "나이스지키미(나이스계열 아이핀,아이디,API 3개 포함)",
                period: "2023.05 - 2024.05",
                skills: [
                    {
                        name: "HTML5",
                        description: "웹 접근성을 고려한 시맨틱 마크업과 대환대출 서비스 구조 설계"
                    },
                    {
                        name: "SCSS",
                        description: "대규모 코드베이스에서의 모듈화된 스타일 구조 설계"
                    },
                    {
                        name: "CSS",
                        description: "멀티클래스 활용으로 기존 코드와의 충돌 방지 및 유지보수성 확보"
                    },
                    {
                        name: "JavaScript",
                        description: "데이터 상태별 UI 처리 및 동적 컴포넌트 제어"
                    },
                    {
                        name: "jQuery",
                        description: "대용량 데이터 처리를 위한 DOM 조작 및 이벤트 핸들링"
                    }
                ],
                contribution: "100%",
                role: "Publisher",
                description: "상세업무<br/>대규모 금융 플랫폼 '나이스지키미'의 유지보수를 주 업무로 담당하였고, 대환대출 서비스 신규 구축(20페이지)을 성공적으로 완료했습니다. 분기별로 나이스 아이핀, 아이디, API 사이트의 리뉴얼 작업과 HTML 메일 템플릿 제작 등 다양한 프로젝트를 수행했습니다.<br/><br/>이슈 및 해결 방법<br/>iOS 기존 지키미 플랫폼의 방대한 코드로 인해 신규 작업 시 예상치 못한 클래스 중복 및 충돌 문제가 발생했습니다. 독립적인 작업 환경에서 이를 해결하기 위해 기존 코드를 철저히 분석하고, 멀티클래스를 활용하여 기존 코드와의 충돌을 최소화하는 방식으로 해결했습니다.<br/><br/>주요 작업 내용<br/>지키미 플랫폼에서 대환대출 서비스를 주도적으로 구축했으며, 특히 데이터 표시가 많은 화면에서 데이터 유무나 대용량 데이터 상황 등 다양한 케이스에 대응할 수 있도록 설계했습니다. 웹 접근성 준수를 위해 시맨틱 태그 사용과 적절한 마크업 구조에 중점을 두어 개발을 진행했습니다.",
                link:"https://www.credit.co.kr/"
            },
            {
                title: "SSF샵(삼성물산 온라인 쇼핑몰)",
                period: "2019.11 - 2022.04",
                skills: [
                    {
                        name: "HTML5",
                        description: "최적의 사용자 경험을 위한 이벤트 페이지 마크업 구조화"
                    },
                    {
                        name: "CSS",
                        description: "브랜드별 아이덴티티를 반영한 스타일링 및 애니메이션 구현"
                    },
                    {
                        name: "JavaScript",
                        description: "이미지와 텍스트의 스크롤 기반 인터랙션 효과 구현"
                    },
                    {
                        name: "jQuery",
                        description: "브랜드별 이벤트 페이지의 다양한 모션 효과와 애니메이션 처리"
                    }
                ],
                contribution: "100%",
                role: "Publisher",
                description: "브랜드별 분기 이벤트 페이지 제작 시, 섬세한 인터랙션 구현에 중점을 두었습니다. 각 이미지와 텍스트 요소마다 차별화된 모션과 페이드 효과를 적용하여 시각적 조화를 이루고자 했습니다. 구현 과정에서는 프로토타입을 먼저 제작하여 기획팀과 긴밀히 협의하였고, 이를 통해 자연스러운 움직임이 구현되기 어려운 부분들을 미리 파악하고 대안을 모색했습니다. 이러한 선제적인 기술 검토와 부서 간 원활한 커뮤니케이션을 통해 완성도 높은 이벤트 페이지를 구현할 수 있었습니다.",
                link:"https://www.ssfshop.com/main"
            },
            {
                title: "피나트(콘텐츠 펀딩)",
                period: "2022.10 - 2023.05",
                skills: [
                    {
                        name: "HTML5",
                        description: "웹 표준을 준수한 시맨틱 마크업으로 펀딩 프로세스 구조화"
                    },
                    {
                        name: "SCSS",
                        description: "반응형 디자인 및 컴포넌트 모듈화로 일관된 UI 스타일링"
                    },
                    {
                        name: "JavaScript",
                        description: "펀딩 프로세스 유효성 검사 및 사용자 인터랙션 구현"
                    },
                    {
                        name: "jQuery",
                        description: "데이터 요청 처리 및 동적 UI 업데이트 구현"
                    }
                ],
                contribution: "100%",
                role: "Publisher",
                description: "콘텐츠 펀딩 플랫폼 '피나트' 웹사이트의 전반적인 리뉴얼을 진행했습니다. 기획 단계부터 참여하여 사용자 경험 개선을 위한 UI/UX를 재정립하였으며, 백엔드 개발자와의 긴밀한 협업을 통해 안정적인 데이터 연동을 구현했습니다. 특히 펀딩 프로세스의 사용성 개선과 반응형 디자인 적용에 주력하여, 다양한 디바이스에서 일관된 서비스 경험을 제공할 수 있도록 했습니다.",
                link:"https://www.ian.re.kr/index_ag.php"
            }
        ];

        // HTML 생성 및 추가
        function generateProjectHTML(project) {
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

            const skillsHTML = project.skills.map(skill => `
                <span class="skill" data-tooltip="${skill.description}">
                    ${skill.name}
                </span>
            `).join('');

            return `
                <div class="project_item ${hasLink}">
                    ${linkHTML}
                    <div class="project_content">
                        <h3 class="project_title">
                            ${project.title}
                            <span>${project.period}</span>
                        </h3>
                        <div class="project_skills">
                            ${skillsHTML}
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
        }

        const $contentWrap = $('.content_wrap');
        const $intro = $('#intro');

        // 각 프로젝트 HTML 생성 및 추가
        projects.forEach(project => {
            const projectHTML = generateProjectHTML(project);
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

    initializeProjects(); // 프로젝트 초기화
    initializeSkillTooltips(); // 스킬 툴팁 초기화
});

// 리사이즈 이벤트 처리
$(window).on('resize', _.debounce(function() {
    $('.skill').removeClass('active');
    initializeSkillTooltips();
}, 250));