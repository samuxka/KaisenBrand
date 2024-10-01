import Apparel_Banner from '../pages/Categories/Imgs/Apparel.jpg'
import Apparel_Imagem from '../assets/Imgs/categories/apparel.jpg'
import Kimono_Banner from '../pages/Categories/Imgs/Gi.jpg'
import Kimono_Imagem from '../assets/Imgs/categories/gi.jpg'
import Nogi_Banner from '../pages/Categories/Imgs/NoGi.jpg'
import Nogi_Imagem from '../assets/Imgs/categories/nogi.jpg'
import Belts_Banner from '../pages/Categories/Imgs/Belts.jpg'
import Belts_Imagem from '../assets/Imgs/categories/belts.jpg'

const categories = [
    {
        id: 'Apparel',
        nome: 'APPAREL',
        thumb_name: 'Apparel',
        banner: Apparel_Banner,
        imagem: Apparel_Imagem,
        produtos: [1,2,3,4,5,6,7,8,9,10,11,12]
    },
    {
        id: 'Kimono',
        nome: 'KIMONO',
        thumb_name: 'Kimono',
        banner: Kimono_Banner,
        imagem: Kimono_Imagem,
        produtos: [13,14,15,16,17]
    },
    {
        id: 'Nogi',
        nome: 'NO GI',
        thumb_name: 'No Gi',
        banner: Nogi_Banner,
        imagem: Nogi_Imagem,
        produtos: [19,20,21,22,23,24]
    },
    {
        id: 'Belts',
        nome: 'BELTS',
        thumb_name: 'Belts',
        banner: Belts_Banner,
        imagem: Belts_Imagem,
        produtos: [25,26,27,28]
    }
]

export default categories