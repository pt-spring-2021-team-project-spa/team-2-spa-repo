package org.wecancodeit.mysteryeducator;

import org.wecancodeit.mysteryeducator.models.WorldWonders;
import org.wecancodeit.mysteryeducator.repositories.WorldWondersRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;

@Component
public class Populator implements CommandLineRunner {

    @Resource
    private WorldWondersRepository worldWondersRepo;

    @Override
    public void run(String... args) throws Exception{


        WorldWonders colosseum = new WorldWonders("Colosseum", "Rome, Italy", "70 Ad", "48 meters", "287 ft", "1951 years old","It’s estimated that over 400,000 people and over a million wild animals died during the centuries that the games took place.", "In Medieval times it was thought that this was one of the seven doors leading to hell, probably a legacy from the gladiator fights.","/images/colosseum.jpg","http://localhost:8080/worldWonder/1/");
        WorldWonders chichenItza = new WorldWonders("Chichen Itza", "Yucatan, Mexico", "Some accounts place the establishment of the city in the early 400s A.D., while others suggest construction started a few years later, in the middle part of the fifth century.", "98 feet tall", "181 feet wide at its base", "1,500 years old","The Kukulkan Pyramid (30 meters in height) nests within itself two smaller pyramids (20 meters and 10 meters tall).", "According to mythology, the Maya worshipped approximately 250 gods whom it was believed, lived on the peaks of mountains. Thus, grand pyramids were constructed to represent mountain tops where the leaders of the people could commune with the deity.","/images/ChichenItza.jpg","http://localhost:8080/worldWonder/2/");
        WorldWonders alKhazna = new WorldWonders("Al Khazna", "Petra, Jordan","Al-Khazneh was originally built as a mausoleum and crypt at the beginning of the 1st century AD during the reign of Aretas IV Philopatris", "39.1 meters", "25.30 meters", "2000 years old","Petra is also known as the rose-red city, a name it gets from the wonderful colour of the rock from which many of the city’s structures were carved.", "The Treasury is crowned by a funerary urn, which according to local legend conceals a pharaoh's treasure.", "/images/Alkhazna.jpg","http://localhost:8080/worldWonder/3/");
        WorldWonders greatWallOfChina = new WorldWonders("The Great Wall of China", "Beijing, China","The Great Wall of China was constructed from the 7th Century BC by the Chu State and lasted until 1878 in the Qing Dynasty. The most remaining we see today was built in the Ming Dynasty about 600 years ago", "average 7.88 meters, 14 meter Highest", "21,196.18 km", "2,300 years old","The Great Wall of China is the world's longest wall and biggest ancient architecture.", "There most popular Great Wall legend is about Meng Jiangnv, whose husband died building the Wall. Her weeping was so bitter that a section of the Wall collapsed, revealing her husband's bones so she could bury them.","/images/great_wall_china.jpg","http://localhost:8080/worldWonder/4/");
        WorldWonders machuPicchu = new WorldWonders("Machu Picchu", "Cusco, Peru","From the mid-15th to the early or mid-16th century.", "2,430 meters", "26 miles", "571 years old","Some believe that Machu Picchu was a place where female virgins were sacrificed (Ñustas in Quechua) due to the large number of female bones found at the site.", "Some believe that the same minds behind the ancient city of Atlantis (described in Plato’s work) arrived in the Peruvian Andes and shared their technology with the Incas.","/images/machu-picchu-sectors.jpg","http://localhost:8080/worldWonder/5/");
        WorldWonders redeemerStatue = new WorldWonders("Christ the Redeemer", "Rio de Janeiro, Brazil","The statue of Christ the Redeemer was completed in 1931", "Stands 98 feet", "Outstretched arms spanning 92 feet", "99 years old","The fact that the statue stands on top of a large mountain makes it prone to lightning strikes, and it gets hit several times a year.", "NA","images/redeemerStatue.jpg","http://localhost:8080/worldWonder/6/");
        WorldWonders tajMahal = new WorldWonders("Taj Mahal", "Agra, India","Commissioned in 1632 by Mughal emperor Shah Jahan to house the remains of his late wife, Mumtaz Mahal, the Taj Mahal is a stunning symbol of love and architectural brilliance.", "73 meters high", "970 feet long", "390 years old","The construction of the Taj Mahal took 20 years and 20,000 workers to complete and the mausoleum houses not just the body of Mumtaz Mahal but also Shah Jahan himself.", "That Shah Jahan wanted the Taj Mahal to be uncopiable, and so he had the artisans hands cut-off to ensure they could never replicate such a feat ever again","/images/tajMahal.jpg","http://localhost:8080/worldWonder/7/");
        worldWondersRepo.save(colosseum);
        worldWondersRepo.save(chichenItza);
        worldWondersRepo.save(alKhazna);
        worldWondersRepo.save(greatWallOfChina);
        worldWondersRepo.save(machuPicchu);
        worldWondersRepo.save(redeemerStatue);
        worldWondersRepo.save(tajMahal);

    }
}
