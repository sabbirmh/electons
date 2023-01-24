$(function () {

    'use strict';

    var QtyInput = (function () {
        var $qtyInputs = $(".qty-input");

        if (!$qtyInputs.length) {
            return;
        }

        var $inputs = $qtyInputs.find(".product-qty");
        var $countBtn = $qtyInputs.find(".qty-count");
        var qtyMin = parseInt($inputs.attr("min"));
        var qtyMax = parseInt($inputs.attr("max"));

        $inputs.change(function () {
            var $this = $(this);
            var $minusBtn = $this.siblings(".qty-count--minus");
            var $addBtn = $this.siblings(".qty-count--add");
            var qty = parseInt($this.val());

            if (isNaN(qty) || qty <= qtyMin) {
                $this.val(qtyMin);
                $minusBtn.attr("disabled", true);
            } else {
                $minusBtn.attr("disabled", false);

                if (qty >= qtyMax) {
                    $this.val(qtyMax);
                    $addBtn.attr('disabled', true);
                } else {
                    $this.val(qty);
                    $addBtn.attr('disabled', false);
                }
            }
        });

        $countBtn.click(function () {
            var operator = this.dataset.action;
            var $this = $(this);
            var $input = $this.siblings(".product-qty");
            var qty = parseInt($input.val());

            if (operator == "add") {
                qty += 1;
                if (qty >= qtyMin + 1) {
                    $this.siblings(".qty-count--minus").attr("disabled", false);
                }

                if (qty >= qtyMax) {
                    $this.attr("disabled", true);
                }
            } else {
                qty = qty <= qtyMin ? qtyMin : (qty -= 1);

                if (qty == qtyMin) {
                    $this.attr("disabled", true);
                }

                if (qty < qtyMax) {
                    $this.siblings(".qty-count--add").attr("disabled", false);
                }
            }

            $input.val(qty);
        });
    })();


    // banner Part ====================

    $('.banner_slider').slick({
        slidesToShow: 1,
        speed: 2000,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        dots: true,
    });

    // Caegories Part ====================

    $('.cate_slider').slick({
        slidesToShow: 3,
        speed: 2000,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        prevArrow: '<i class="fas fa-long-arrow-alt-left prv_arr"></i>',
        nextArrow: '<i class="fas fa-long-arrow-alt-right nxt_arr"></i>',
        dots: false,

        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
    });

    // cart Part ====================

    $('.cart_left').slick({
        slidesToShow: 1,
        speed: 2000,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        dots: true,


    });

    // comment Part ====================

    $('.row_comment').slick({
        slidesToShow: 3,
        speed: 2000,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        dots: true,

        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]

    });

    // News Part ====================

    $('.news_row_slider').slick({
        slidesToShow: 2,
        speed: 2000,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        dots: true,

        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
    });


    // header Part ====================

    $('.left_slider_header').slick({
        slidesToShow: 1,
        speed: 3000,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        dots: false,
    });




});