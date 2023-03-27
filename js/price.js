$(document).ready(function () {
    $('.btn-plan').click(function () {
        if ($(this).hasClass('btn-plan-visited')) {
            $(this).removeClass('btn-plan-visited')
            switch (this.id) {
                case 'free':
                    $('#free-card').removeClass('card-visited')
                    break;
                case 'standart':
                    $('#standart-card').removeClass('card-visited')
                    break;
                case 'premium':
                    $('#premium-card').removeClass('card-visited')
                    break;
                default:
                    break;
            }
        } else {
            $('.btn-plan').removeClass('btn-plan-visited')
            $(this).addClass('btn-plan-visited')
            
            $('.card').removeClass('card-visited')
            switch (this.id) {
                case 'free':
                    $('#free-card').addClass('card-visited')
                    break;
                case 'standart':
                    $('#standart-card').addClass('card-visited')
                    break;
                case 'premium':
                    $('#premium-card').addClass('card-visited')
                    break;
                default:
                    break;
            }
        }
    })
})
