///// swiper slider javaScript
var swiper = new Swiper(".mySwiper", {
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      loop: true,
      speed: 500
});

///// mobile menu javaScript
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menuToggle");
    const menuIcon = document.getElementById("menuIcon");
    const closeIcon = document.getElementById("closeIcon");
    const mobileMenu = document.getElementById("mobileMenu");

    menuToggle.addEventListener("click", function () {
        mobileMenu.classList.toggle("hidden");
        menuIcon.classList.toggle("hidden");
        closeIcon.classList.toggle("hidden");
    });
});

///// language change javaScript
const translations = {
    bn: {
        campous: "ক্যাম্পাস",
        about: "আমাদের সম্পর্কে",
        history: "ইতিহাস",
        aims: "লক্ষ্য ও উদ্দেশ্য",
        industrial: "প্রাতিষ্ঠানিক কাঠামো",
        admission: "ভর্তি",
        apply: "কিভাবে আবেদন করতে হবে",
        application: "আবেদন",
        exam: "ভর্তি পরীক্ষা",
        admitionpolicy: "ভর্তি নীতি",
        educationsystem: "বর্তমান শিক্ষা ব্যবস্থা",
        Technologies: "টেকনোলজিসমূহ",
        Computer: "কম্পিউটার সায়েন্স",
        civil: "সিভিল",
        Electrical: "ইলেকট্রিক্যাল",
        Architecture: "আর্কিটেকচার",
        Administration: "প্রশাসন",
        principal: "অধ্যক্ষ",
        viceprincipal: "উপাধ্যক্ষ",
        AcademicCouncil: "একাডেমিক কাউন্সিল",
        Teachers: "শিক্ষক শিক্ষিকামণ্ডলী",
        Directors: "পরিচালকবৃন্দ",
        Academicactivities: "একাডেমিক কার্যক্রম",
        Classification: "শ্রেণিসূচি",
        OnlineClassSchedule: "অনলাইন শ্রেণিসূচি",
        ExamSchedule: "পরীক্ষার সময়সূচি",
        AcademicSyllabus: "একাডেমিক সিলেবাস",
        Academiccalendar: "শিক্ষা বর্ষপঞ্জি",
        student: "শিক্ষার্থী",
        Studentuniform: "শিক্ষার্থী ইউনিফর্ম",
        Testsystem: "পরীক্ষা ব্যবস্থা",
        Rulesregulations: "নিয়ম এবং প্রবিধান",
        ourstudents: "আমাদের শিক্ষার্থী",
        Studentsuccess: "শিক্ষার্থীদের সাফল্য",
        result: "ফলাফল",
        InternalTestResults: "অভ্যন্তরীণ পরীক্ষার ফলাফল",
        BoardExamResult: "বোর্ড পরীক্ষার ফলাফল",
        Resource: "রিসোর্স",
        Digitalclasscontent: "ডিজিটাল ক্লাস কনটেন্ট",
        Library: "গ্রন্থাগার",
        ComputerLab: "কম্পিউটার ল্যাব",
        Playground: "খেলার মাঠ",
        ICTClub: "আইসিটি ক্লাব",
        Gallery: "গ্যালারি",
        Photogallery: "ছবি গ্যালারি",
        Videogallery: "ভিডিও গ্যালারি",
        NoticeCorner: "নোটিশ কর্নার",
        Allnotices: "সকল নোটিশ",
        JobCorner: "জব কর্ণার",
        Notices: "নোটিশ",
        marqueenotice: "***শিক্ষার্থীদের অবগতির জন্য জানানো যাচ্ছে যে ১৮ মার্চ ২০২৫ ইং তারিখ থেকে পর্ব-মধ্য পরীক্ষা অনুষ্ঠিত হবে।",
        Notice: "নোটিশ",
        midtermexams: "পর্ব-মধ্য পরীক্ষা সম্পর্কিত নোটিশ।",
        date1: "(১৮ মার্চ ২০২৫)",
        Noticeregarding: "কমপেক্ট পলিটেকনিক ইনস্টিটিউটের আইসিটি ক্লাবের ছাত্র প্রতিনিধি অনুমোদন সম্পর্কিত নোটিশ।",
        date2: "(২৬ ফেব্রুয়ারী, ২০২৫)",
        Download: "ডাউনলোড",
        Jobplacement: "জব প্লেসমেন্ট",
        Events: "ইভেন্টস",
        Principal: "অধ্যক্ষ",
        IglooRoy: "ইগলু রায়",
        CompactPolytechnic: "কমপেক্ট পলিটেকনিক ইনস্টিটিউট",
        BangladeshTechnical: "বাংলাদেশ কারিগরি শিক্ষা বোর্ড",
        DirectorateofTechnical: "কারিগরি শিক্ষা অধিদপ্তর",
        Contactforinformation: "তথ্য প্রাপ্তির জন্য যোগাযোগ",
        NTVQFwebsite: "NTVQF ওয়েবসাইট",
        DepartmentofSecondary: "মাধ্যমিক ও উচ্চ শিক্ষা বিভাগ",
        PrimeMinister: "প্রধানমন্ত্রীর শিক্ষা সহায়তা ট্রাস্ট",
        nationalanthem: "জাতীয় সংগীত",
        Emergencyhotline: "জরুরি হটলাইন",
        InstituteLocation: "ইনস্টিটিউট লোকেশন",
        CollageLocation: "একাডেমি রোড - ৩৯০০, ফেনী, বাংলাদেশ।"
    },
    en: {
        campous: "Campus",
        about: "About us",
        history: "History",
        aims: "Aims and objectives",
        industrial: "Institutional structure",
        admission: "Admission",
        apply: "How to apply",
        application: "application",
        exam: "Admission test",
        admitionpolicy: "Admission policy",
        educationsystem: "Current education system",
        Technologies: "Technologies",
        Computer: "Computer Science",
        civil: "Civil",
        Electrical: "Electrical",
        Architecture: "Architecture",
        Administration: "Administration",
        principal: "Principal",
        viceprincipal: "Vice principal",
        AcademicCouncil: "Academic council",
        Teachers: "Teachers",
        Directors: "Directors",
        Academicactivities: "Academic activities",
        Classification: "Classification",
        OnlineClassSchedule: "Online class schedule",
        ExamSchedule: "Exam Schedule",
        AcademicSyllabus: "Academic syllabus",
        Academiccalendar: "Academic calendar",
        student: "Student",
        Studentuniform: "Student uniform",
        Testsystem: "Examination system",
        Rulesregulations: "Rules and regulations",
        ourstudents: "Our students",
        Studentsuccess: "Student success",
        result: "Result",
        InternalTestResults: "Internal test results",
        BoardExamResult: "Board exam result",
        Resource: "Resource",
        Digitalclasscontent: "Digital class content",
        Library: "Library",
        ComputerLab: "Computer lab",
        Playground: "Playground",
        ICTClub: "ICT Club",
        Gallery: "Gallery",
        Photogallery: "Photo gallery",
        Videogallery: "Video gallery",
        NoticeCorner: "Notice corner",
        Allnotices: "All notices",
        JobCorner: "Job corner",
        Notices: "Notice",
        marqueenotice: "***For the information of students, it is hereby informed that the mid-term examination will be held from March 18, 2025.",
        Notice: "Notice",
        midtermexams: "Notice regarding mid-term exams.",
        date1: "(18 March 2025)",
        Noticeregarding: "Notice regarding approval of student representative of ICT Club of Compact Polytechnic Institute.",
        date2: "(February 26, 2025)",
        Download: "Download",
        Jobplacement: "Job placement",
        Events: "Events",
        Principal: "Principal",
        IglooRoy: "Igloo Roy",
        CompactPolytechnic: "Compact Polytechnic Institute",
        BangladeshTechnical: "Bangladesh Technical Education Board",
        DirectorateofTechnical: "Directorate of Technical Education",
        Contactforinformation: "Contact for information",
        NTVQFwebsite: "NTVQF website",
        DepartmentofSecondary: "Department of Secondary and Higher Education",
        PrimeMinister: "Prime Minister's Education Assistance Trust",
        nationalanthem: "national Anthem",
        Emergencyhotline: "Emergency Hotline",
        InstituteLocation: "Institute Location",
        CollageLocation: "Academy Road - 3900, Feni, Bangladesh.",

    }
};
function setLanguage(language) {
    document.querySelectorAll("[data-translate]").forEach(element => {
        const key = element.getAttribute("data-translate");
        element.innerText = translations[language][key];
    });
}
document.getElementById("language-selector").addEventListener("change", function() {
    setLanguage(this.value);
});
setLanguage("bn");