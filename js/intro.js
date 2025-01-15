$(document).ready(function() {
    function createTriangles() {
        const triangleCount = 17;
        const container = $('.triangle_wrap');
        
        for(let i = 1; i <= triangleCount; i++) {
            container.append(`
                <div class="triangle tri${i}">
                    <span class="inner"></span>
                </div>
            `);
        }
    };

    function initIntro() {
        const $intro = $('.intro');
        const $progressBar = $('.progress');
        
        // 프로그레스 바 애니메이션
        $progressBar.animate({
            width: '100%'
        }, 3000, 'linear', () => {
            $intro.fadeOut('slow');
        });
    };

    // 초기화
    createTriangles();
    initIntro();
});