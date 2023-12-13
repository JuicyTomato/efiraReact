
//Qui elenco di posters che posso usare in tutte le pagine

//importing images
//Efira originals
import efira2021 from "./images/efira_originals/efira_2021.png"
import efira2022 from "./images/efira_originals/efira_2022.png"
import Lmovie1 from "./images/efira_originals/large-movie1.jpg"
import Lmovie2 from "./images/efira_originals/large-movie2.jpg"
import Lmovie3 from "./images/efira_originals/large-movie3.jpg"
import Lmovie4 from "./images/efira_originals/large-movie4.jpg"
import Lmovie5 from "./images/efira_originals/large-movie5.jpg"

//Varese Graduations
import laureeVarese2022 from "./images/varese_lauree/video_laure_varese_2022.png"
import laureeVarese2023 from "./images/varese_lauree/video_lauree_varese_2023.png"
import movie1 from "./images/varese_lauree/small-movie1.jpg"
import movie2 from "./images/varese_lauree/small-movie2.jpg"
import movie3 from "./images/varese_lauree/small-movie3.jpg"
import movie4 from "./images/varese_lauree/small-movie4.jpg"
import movie5 from "./images/varese_lauree/small-movie5.jpg"


//Sacco Graduations
import sacco2018 from './images/sacco_lauree/video_2018.png'
import sacco2019 from './images/sacco_lauree/video_2019.png'
import sacco2022 from './images/sacco_lauree/video_2022.png'

//podcast
import podcast2023 from "./images/podcast/podcastMarilleva2023.jpeg"

//Polic Sanpa


//Humanitas


//San Raffa


//Monza


//Nozara


//Brescia


//Pavia



//Efira Originals
export const generateEfiraOriginalsArray = () => {
    return [
        { link: "efira_originals/vidPage/film_description2021.html", buttonClass: "photos_trasparent_button", imageClass: "row_poster_in_list row__posterLarge", imageSrc: efira2021 },
        { link: "efira_originals/vidPage/film_description.html", buttonClass: "photos_trasparent_button", imageClass: "row_poster_in_list row__posterLarge", imageSrc: efira2022 },
        { link: "efira_originals/vidPage/film_description.html", buttonClass: "photos_trasparent_button", imageClass: "row_poster_in_list row__posterLarge", imageSrc: Lmovie1 },
        { link: "efira_originals/vidPage/film_description.html", buttonClass: "photos_trasparent_button", imageClass: "row_poster_in_list row__posterLarge", imageSrc: Lmovie2 },
        { link: "efira_originals/vidPage/film_description.html", buttonClass: "photos_trasparent_button", imageClass: "row_poster_in_list row__posterLarge", imageSrc: Lmovie3 },
        { link: "efira_originals/vidPage/film_description.html", buttonClass: "photos_trasparent_button", imageClass: "row_poster_in_list row__posterLarge", imageSrc: Lmovie4 },
        { link: "efira_originals/vidPage/film_description.html", buttonClass: "photos_trasparent_button", imageClass: "row_poster_in_list row__posterLarge", imageSrc: Lmovie5 },
      
    ];
};


//Poddecast
export const generatePodcasts = () => {
    return [
        { link: "podcast/2023_marilleva.html", buttonClass: "photos_trasparent_button_little", imageClass: "row__poster", imageSrc: podcast2023 },
    ];
}

//Varese Graduations
export const generateVaresegraduations = () => {
    return [
        { link: "video_graduations_varese/vidPage/2022_description.js", buttonClass: "photos_trasparent_button_little", imageClass: "row__poster", imageSrc: laureeVarese2022 },
       /* { link: "video_graduations_varese/vidPage/2023_description.html", buttonClass: "photos_trasparent_button_little", imageClass: "row__poster", imageSrc: laureeVarese2023 },
        { link: "video_graduations_varese/vidPage/2023_description.html", buttonClass: "photos_trasparent_button_little", imageClass: "row__poster", imageSrc: movie1 },
        { link: "video_graduations_varese/vidPage/2023_description.html", buttonClass: "photos_trasparent_button_little", imageClass: "row__poster", imageSrc: movie2 },
        { link: "video_graduations_varese/vidPage/2023_description.html", buttonClass: "photos_trasparent_button_little", imageClass: "row__poster", imageSrc: movie3 },
        { link: "video_graduations_varese/vidPage/2023_description.html", buttonClass: "photos_trasparent_button_little", imageClass: "row__poster", imageSrc: movie4 },
        { link: "video_graduations_varese/vidPage/2023_description.html", buttonClass: "photos_trasparent_button_little", imageClass: "row__poster", imageSrc: movie5 },*/
    ];
}

//Sacco Graduations
export const generateSaccoGraduations = () => {
    return [
        { link: "video_graduations_sacco/vidPage/2022_description.html", buttonClass: "photos_trasparent_button_little", imageClass: "row__poster", imageSrc: sacco2022 },
        { link: "video_graduations_sacco/vidPage/2018_description.html", buttonClass: "photos_trasparent_button_little", imageClass: "row__poster", imageSrc: sacco2018 },
        { link: "video_graduations_sacco/vidPage/2019_description.html", buttonClass: "photos_trasparent_button_little", imageClass: "row__poster", imageSrc: sacco2019 },
    ];
}




//Polic Sanpa Graduations
export const generatePolicSanpa = () => {
    return [
        { link: "video_graduations_varese/vidPage/2022_description.html", buttonClass: "photos_trasparent_button_little", imageClass: "row__poster", imageSrc: laureeVarese2022 },
        { link: "video_graduations_varese/vidPage/2023_description.html", buttonClass: "photos_trasparent_button_little", imageClass: "row__poster", imageSrc: laureeVarese2023 },
        { link: "video_graduations_varese/vidPage/2023_description.html", buttonClass: "photos_trasparent_button_little", imageClass: "row__poster", imageSrc: movie1 },
        { link: "video_graduations_varese/vidPage/2023_description.html", buttonClass: "photos_trasparent_button_little", imageClass: "row__poster", imageSrc: movie2 },
        { link: "video_graduations_varese/vidPage/2023_description.html", buttonClass: "photos_trasparent_button_little", imageClass: "row__poster", imageSrc: movie3 },
        { link: "video_graduations_varese/vidPage/2023_description.html", buttonClass: "photos_trasparent_button_little", imageClass: "row__poster", imageSrc: movie4 },
        { link: "video_graduations_varese/vidPage/2023_description.html", buttonClass: "photos_trasparent_button_little", imageClass: "row__poster", imageSrc: movie5 },
    ];
}




//Humanitas Graduations
export const generateHumanitas = () => {
    return [
        { link: "video_graduations_varese/vidPage/2022_description.html", buttonClass: "photos_trasparent_button_little", imageClass: "row__poster", imageSrc: laureeVarese2022 },
        { link: "video_graduations_varese/vidPage/2023_description.html", buttonClass: "photos_trasparent_button_little", imageClass: "row__poster", imageSrc: laureeVarese2023 },
        { link: "video_graduations_varese/vidPage/2023_description.html", buttonClass: "photos_trasparent_button_little", imageClass: "row__poster", imageSrc: movie1 },
        { link: "video_graduations_varese/vidPage/2023_description.html", buttonClass: "photos_trasparent_button_little", imageClass: "row__poster", imageSrc: movie2 },
        { link: "video_graduations_varese/vidPage/2023_description.html", buttonClass: "photos_trasparent_button_little", imageClass: "row__poster", imageSrc: movie3 },
        { link: "video_graduations_varese/vidPage/2023_description.html", buttonClass: "photos_trasparent_button_little", imageClass: "row__poster", imageSrc: movie4 },
        { link: "video_graduations_varese/vidPage/2023_description.html", buttonClass: "photos_trasparent_button_little", imageClass: "row__poster", imageSrc: movie5 },
    ];
}




//San Raffa Graduations
export const generatesettoreSanRaffa = () => {
    return [
        { link: "video_graduations_varese/vidPage/2022_description.html", buttonClass: "photos_trasparent_button_little", imageClass: "row__poster", imageSrc: laureeVarese2022 },
        { link: "video_graduations_varese/vidPage/2023_description.html", buttonClass: "photos_trasparent_button_little", imageClass: "row__poster", imageSrc: laureeVarese2023 },
        { link: "video_graduations_varese/vidPage/2023_description.html", buttonClass: "photos_trasparent_button_little", imageClass: "row__poster", imageSrc: movie1 },
        { link: "video_graduations_varese/vidPage/2023_description.html", buttonClass: "photos_trasparent_button_little", imageClass: "row__poster", imageSrc: movie2 },
        { link: "video_graduations_varese/vidPage/2023_description.html", buttonClass: "photos_trasparent_button_little", imageClass: "row__poster", imageSrc: movie3 },
        { link: "video_graduations_varese/vidPage/2023_description.html", buttonClass: "photos_trasparent_button_little", imageClass: "row__poster", imageSrc: movie4 },
        { link: "video_graduations_varese/vidPage/2023_description.html", buttonClass: "photos_trasparent_button_little", imageClass: "row__poster", imageSrc: movie5 },
     ];
}




//Monza Graduations
export const generateMonza = () => {
    return [
        { link: "video_graduations_varese/vidPage/2022_description.html", buttonClass: "photos_trasparent_button_little", imageClass: "row__poster", imageSrc: laureeVarese2022 },
        { link: "video_graduations_varese/vidPage/2023_description.html", buttonClass: "photos_trasparent_button_little", imageClass: "row__poster", imageSrc: laureeVarese2023 },
        { link: "video_graduations_varese/vidPage/2023_description.html", buttonClass: "photos_trasparent_button_little", imageClass: "row__poster", imageSrc: movie1 },
        { link: "video_graduations_varese/vidPage/2023_description.html", buttonClass: "photos_trasparent_button_little", imageClass: "row__poster", imageSrc: movie2 },
        { link: "video_graduations_varese/vidPage/2023_description.html", buttonClass: "photos_trasparent_button_little", imageClass: "row__poster", imageSrc: movie3 },
        { link: "video_graduations_varese/vidPage/2023_description.html", buttonClass: "photos_trasparent_button_little", imageClass: "row__poster", imageSrc: movie4 },
        { link: "video_graduations_varese/vidPage/2023_description.html", buttonClass: "photos_trasparent_button_little", imageClass: "row__poster", imageSrc: movie5 },
    ];
}





//Novara Graduations
export const generateNovara = () => {
    return [
        { link: "video_graduations_varese/vidPage/2022_description.html", buttonClass: "photos_trasparent_button_little", imageClass: "row__poster", imageSrc: laureeVarese2022 },
        { link: "video_graduations_varese/vidPage/2023_description.html", buttonClass: "photos_trasparent_button_little", imageClass: "row__poster", imageSrc: laureeVarese2023 },
        { link: "video_graduations_varese/vidPage/2023_description.html", buttonClass: "photos_trasparent_button_little", imageClass: "row__poster", imageSrc: movie1 },
        { link: "video_graduations_varese/vidPage/2023_description.html", buttonClass: "photos_trasparent_button_little", imageClass: "row__poster", imageSrc: movie2 },
        { link: "video_graduations_varese/vidPage/2023_description.html", buttonClass: "photos_trasparent_button_little", imageClass: "row__poster", imageSrc: movie3 },
        { link: "video_graduations_varese/vidPage/2023_description.html", buttonClass: "photos_trasparent_button_little", imageClass: "row__poster", imageSrc: movie4 },
        { link: "video_graduations_varese/vidPage/2023_description.html", buttonClass: "photos_trasparent_button_little", imageClass: "row__poster", imageSrc: movie5 },
    ];
}





//Brescia Graduations
export const generateBrescia = () => {
    return [
        { link: "video_graduations_varese/vidPage/2022_description.html", buttonClass: "photos_trasparent_button_little", imageClass: "row__poster", imageSrc: laureeVarese2022 },
        { link: "video_graduations_varese/vidPage/2023_description.html", buttonClass: "photos_trasparent_button_little", imageClass: "row__poster", imageSrc: laureeVarese2023 },
        { link: "video_graduations_varese/vidPage/2023_description.html", buttonClass: "photos_trasparent_button_little", imageClass: "row__poster", imageSrc: movie1 },
        { link: "video_graduations_varese/vidPage/2023_description.html", buttonClass: "photos_trasparent_button_little", imageClass: "row__poster", imageSrc: movie2 },
        { link: "video_graduations_varese/vidPage/2023_description.html", buttonClass: "photos_trasparent_button_little", imageClass: "row__poster", imageSrc: movie3 },
        { link: "video_graduations_varese/vidPage/2023_description.html", buttonClass: "photos_trasparent_button_little", imageClass: "row__poster", imageSrc: movie4 },
        { link: "video_graduations_varese/vidPage/2023_description.html", buttonClass: "photos_trasparent_button_little", imageClass: "row__poster", imageSrc: movie5 },
    ];
}





//Pavia Graduations
export const generatePavia = () => {
    return [
        { link: "video_graduations_varese/vidPage/2022_description.html", buttonClass: "photos_trasparent_button_little", imageClass: "row__poster", imageSrc: laureeVarese2022 },
        { link: "video_graduations_varese/vidPage/2023_description.html", buttonClass: "photos_trasparent_button_little", imageClass: "row__poster", imageSrc: laureeVarese2023 },
        { link: "video_graduations_varese/vidPage/2023_description.html", buttonClass: "photos_trasparent_button_little", imageClass: "row__poster", imageSrc: movie1 },
        { link: "video_graduations_varese/vidPage/2023_description.html", buttonClass: "photos_trasparent_button_little", imageClass: "row__poster", imageSrc: movie2 },
        { link: "video_graduations_varese/vidPage/2023_description.html", buttonClass: "photos_trasparent_button_little", imageClass: "row__poster", imageSrc: movie3 },
        { link: "video_graduations_varese/vidPage/2023_description.html", buttonClass: "photos_trasparent_button_little", imageClass: "row__poster", imageSrc: movie4 },
        { link: "video_graduations_varese/vidPage/2023_description.html", buttonClass: "photos_trasparent_button_little", imageClass: "row__poster", imageSrc: movie5 },
    ];
}

