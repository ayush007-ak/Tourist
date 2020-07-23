import React, {Component} from 'react';
import Card from './CardUI';

import img1 from "../assests/Gwarighat.png";
import img2 from "../assests/Bargi.jpg";
import img3 from "../assests/Dumna.jpeg";
import img4 from "../assests/shankar.jpg";
import img5 from "../assests/Bhedaghat.jpg";
import img6 from "../assests/kila.jpg";

class Cards extends Component{
   
    render(){
        return(
<div className="container-fluid d-flex justify-content-center">
    <div className="row">
        <div className="col-md-4">
            
            <Card imgsrc={img1} title="Gwarighat " text="Gwarighat is a small town on the banks of the river Narmada near the city of Jabalpur in Madhya Pradesh, India.[1]. Hindus perform their cremation rites here as per Garuda Purana. It is associated with Hindu Puranas, also; due to the presence of Narmada Sidh Kund, near Uma Ghat, wherein renowned Rishis performed Tapas (Indian religions), and it is believed that people are cured of their ailments here. Maa Narmada Temple is also situated here, where Narmada Aarti, is performed in the evenings.[2]

Being a Hindu site for cremation rites and other religious ceremonies there are other castes religious monuments here too; as Gurdwara Gwari Ghat Saheb of Guru Nanak[3], the founder of Sikhism, who reformed several thugs and criminals here, a temple and ashram dedicated to Sai Baba followers, and Jain temple. Madan Mahal Rani Durgawati Fort is also associated with religious tourism here.[4]

During Kartik (month), a huge fair is held at Gwarighat, which is supported by the local government, who also take care of the temples here, due to their antiquity.[5]

"
           
             />
           
             
          
            
            
            
            
            
            </div>
            <div className="col-md-4">
            <Card imgsrc={img2} title="Bargi Dam" text="Bargi Dam is one of the first completed dams out of the chain of 30 major dams to be constructed on Bargi River (Tributary of Narmada River) in Madhya Pradesh, India Here Narmada fully Submerge Bargi River that It can't be seen as it exist or not. Two major irrigation projects, named Bargi Diversion Project and Rani Avantibai Lodhi Sagar Project, have been developed by Bargi Dam. The Narmada is the largest river in Madhya Pradesh, flowing towards the west and falling in the Arabian Sea. Its total length is 1312 km of which it covers 1072 km in Madhya Pradesh.

The Central Water and Power Commission conceptualized the proposal of this dam construction in 1968 envisaging irrigation in 2,980 square kilometres and hydropower generation capacity of 100 MW (2x45 MW + 2x5 MW). (Source: DPR, Govt of M.P. 1968). Later the Bargi diversion scheme was planned, increasing the total irrigation potential to 4,370 square kilometres. The dam construction work started in 1974 and was completed in 1990 when the dam was filled to its complete capacity. Although the proposed power generation was 105 MW, currently only 90 MW is being generated in this HydroPower Generation Plant. Two independent units of 45 MW each have been set up and they function mainly during the evening peak in demand.

The height of the dam is 69 m and length 5.4 km. A lake of about 75 km in length and 4.5 km width, spreading over 267.97 km² in Jabalpur, Mandla and Seoni districts, is formed when the water is impounded up to the dam FRL of 422.76 m."/>
            </div>
                <div className="col-md-4">
                <Card imgsrc={img3} title="Dumna Natural Park" text="Dumna Nature Reserve Park is an ecotourism site open to the public located in the Jabalpur district of the Indian state of Madhya Pradesh.[1] It includes a dam, forests, and wildlife in a 1058-hectare area. Wild animals, including chital, wild boar, porcupine, jackals, and many species of birds inhabit the park. Sightings of leopards have also been reported in and around the park.[2] A children's park and a restaurant are available. A hanging bridge, tent platform, rest house, fishing platform, toy train, and boating are other attractions at the nearby Khandari Dam. Activities in the water, including bathing or swimming, are prohibited due to the presence of crocodiles."/>
                </div>

            <div className="col-md-4 " >
            <Card imgsrc={img4} title="Kachnar city" text="The lord shiva statue in Jabalpur is 76 feet tall and the design of the same will keep you awestruck. This huge idol is situated in the age-old city of Kachar. This is termed as one of the most popular and widely held religious sites in the Indian state of Madhya Pradesh. The statue has 12 shiva lingams from all the major Shiva temples in the country. A trip to this place will surely behold you in its serenity and holiness."/>
            </div>
            <div className="col-md-4">
            <Card imgsrc = {img5} title="Bhedaghat" text="Bhedaghat Tourism
Bhedaghat is known for the Dhuandar Falls (Dhuan means smoke and Dhar means flow), a huge cascade of water that falls from a height of 98 feet. Boating in Bhedaghat especially during the moonlit night would surely make up for an unforgettable experience. The boatmen of these place are storytellers that will tell you about the place in the form of interesting stories.

Also regarded as the Marble Rocks of Bhedaghat, this small town has earned a reputation for the massive 100 ft rocks on either side of the Narmada. Bhedaghat is in close proximity of one of the major cities of Madhya Pradesh of Jabalpur

The other notable attractions include 64 Yogini Temple and 'Bandar Kudini', a spot where two cliffs are so close to each other that monkeys hop over from one side to another"/>
            </div>
                <div className="col-md-4">
                <Card imgsrc={img6} title="Rani Durgavati Fort" text="Situated atop a hill in Jabalpur town is a small but enchanting fort of the Rajgond rulers. It was more of a manned post on vigil for invaders now enveloped in shroud of history. The fort dates back to 11th century AD. The fort is well associated with Rani Durgavati the Gond Queen and her son Veer Narayan. Rani Durgavati eventually died fighting the mughals and is hailed as a martyr in Indian history. She also built numerous temples and tanks scattered around Jabalpur chiefly around her Garha principality.[2]

The Rajgond rulers reigned over Jabalpur, Mandla and surrounding regions. Madan Mahal is one such fort built by them. Though not exactly an architectural marvel, the little fort is characterized by intrigue of ancient monuments in India.[3]

The structure generates an aura of awe being compact and yet fully equipped for martial encounters. The stable, war rooms, small reservoir and main pleasure chamber of the rulers offer visitors much to see and admire.[4]

The monument is situated at a height of about five hundred meters on the hill of same name. The Balancing Rock is a huge stone balanced on the tip of another. It is a geological wonder on the way to the fort.

There are many myths floating about the fort of the Gonds. It is said to harbor gold bricks and Gond treasures hidden somewhere in it in accessible underground folds. A tunnel covering a long distance is said to be located somewhere around the precinct - a possible escape route and transportation artery of the Gonds.

Nearest Railway station is Madan Mahal railway station."/>
                </div>




             </div>

             
             
</div>
        );
    }
}
export default Cards;