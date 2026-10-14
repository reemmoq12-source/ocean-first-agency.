// الانتظار حتى تحميل عناصر HTML بالكامل
document.addEventListener('DOMContentLoaded', function () {

    // ==========================================
    // 01 - التحقق من صحة نموذج التواصل (Form Validation)
    // ==========================================
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            // التحقق مما إذا كان النموذج يستوفي الشروط
            if (!contactForm.checkValidity()) {
                event.preventDefault();  // إيقاف إرسال النموذج إذا كانت هناك أخطاء
                event.stopPropagation(); // منع انتشار الحدث
            } else {
                event.preventDefault(); // إيقاف التحديث الافتراضي للصفحة للتجربة
                
                // إظهار رسالة نجاح جميلة للمستخدم
                alert('شكراً لك! تم إرسال رسالتك بنجاح وسنتواصل معك قريباً.');
                contactForm.reset(); // إعادة إعطاء الحقول قيمتها الفارغة
                contactForm.classList.remove('was-validated'); // إعادة ضبط حالة التقييم
                return;
            }

            // إضافة كلاس Bootstrap لإظهار حقول الخطأ باللون الأحمر
            contactForm.classList.add('was-validated');
        }, false);
    }

    // ==========================================
    // 02 - إغلاق القائمة المنسدلة على الهواتف عند الضغط على أي رابط
    // ==========================================
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            // التأكد مما إذا كانت القائمة مفتوحة على الجوال
            if (navbarCollapse.classList.contains('show')) {
                const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                    toggle: true
                });
            }
        });
    });

    // ==========================================
    // 03 - إضافة ظل ورؤية لشريط التنقل عند التمرير لأسفل (Sticky Header Shadow)
    // ==========================================
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            navbar.classList.add('shadow-lg');
        } else {
            navbar.classList.remove('shadow-lg');
        }
    });

});