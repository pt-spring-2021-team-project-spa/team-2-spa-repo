package org.wecancodeit.mysteryeducator;

import org.wecancodeit.mysteryeducator.models.Numbers;
import org.wecancodeit.mysteryeducator.models.Facts;
import org.wecancodeit.mysteryeducator.models.WorldWonders;
import org.wecancodeit.mysteryeducator.repositories.NumbersRepository;
import org.wecancodeit.mysteryeducator.repositories.FactsRepository;
import org.wecancodeit.mysteryeducator.repositories.WorldWondersRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;

@Component
public class Populator implements CommandLineRunner {

    @Resource
    private WorldWondersRepository worldWondersRepo;

    @Resource
    private FactsRepository factsRepo;

    @Resource
    private NumbersRepository dataRepo;

    @Override
    public void run(String... args) throws Exception{

        Numbers colosseumN = new Numbers("70 Ad", "48 meters", "287 ft", "1951 years old");
        Numbers chichenItzaN = new Numbers("Some accounts place the establishment of the city in the early 400s A.D., while others suggest construction started a few years later, in the middle part of the fifth century.", "98 feet tall", "181 feet wide at its base", "1,500 years old");
        Numbers alKhaznaN = new Numbers("Al-Khazneh was originally built as a mausoleum and crypt at the beginning of the 1st century AD during the reign of Aretas IV Philopatris", "39.1 meters", "25.30 meters", "2000 years old");
        Numbers greatWallofChinaN = new Numbers("The Great Wall of China was constructed from the 7th Century BC by the Chu State and lasted until 1878 in the Qing Dynasty. The most remaining we see today was built in the Ming Dynasty about 600 years ago", "average 7.88 meters, 14 meter Highest", "21,196.18 km", "2,300 years old");
        Numbers machuPicchuN = new Numbers("From the mid-15th to the early or mid-16th century.", "2,430 meters", "26 miles", "571 years old");
        Numbers redeemerStatueN = new Numbers("The statue of Christ the Redeemer was completed in 1931", "Stands 98 feet", "Outstretched arms spanning 92 feet", "99 years old");
        Numbers tajMahalN = new Numbers("Commissioned in 1632 by Mughal emperor Shah Jahan to house the remains of his late wife, Mumtaz Mahal, the Taj Mahal is a stunning symbol of love and architectural brilliance.", "73 meters high", "970 feet long", "390 years old");
        dataRepo.save(colosseumN);
        dataRepo.save(chichenItzaN);
        dataRepo.save(alKhaznaN);
        dataRepo.save(greatWallofChinaN);
        dataRepo.save(machuPicchuN);
        dataRepo.save(redeemerStatueN);
        dataRepo.save(tajMahalN);

        Facts colosseumF = new Facts("It’s estimated that over 400,000 people and over a million wild animals died during the centuries that the games took place.", "In Medieval times it was thought that this was one of the seven doors leading to hell, probably a legacy from the gladiator fights.");
        Facts chichenItzaF = new Facts("The Kukulkan Pyramid (30 meters in height) nests within itself two smaller pyramids (20 meters and 10 meters tall).", "According to mythology, the Maya worshipped approximately 250 gods whom it was believed, lived on the peaks of mountains. Thus, grand pyramids were constructed to represent mountain tops where the leaders of the people could commune with the deity.");
        Facts alKhaznaF = new Facts("Petra is also known as the rose-red city, a name it gets from the wonderful colour of the rock from which many of the city’s structures were carved.", "The Treasury is crowned by a funerary urn, which according to local legend conceals a pharaoh's treasure.");
        Facts greatWallofChinaF = new Facts("The Great Wall of China is the world's longest wall and biggest ancient architecture.", "There most popular Great Wall legend is about Meng Jiangnv, whose husband died building the Wall. Her weeping was so bitter that a section of the Wall collapsed, revealing her husband's bones so she could bury them.");
        Facts machuPicchuF = new Facts("Some believe that Machu Picchu was a place where female virgins were sacrificed (Ñustas in Quechua) due to the large number of female bones found at the site.", "Some believe that the same minds behind the ancient city of Atlantis (described in Plato’s work) arrived in the Peruvian Andes and shared their technology with the Incas.");
        Facts redeemerStatueF = new Facts("The fact that the statue stands on top of a large mountain makes it prone to lightning strikes, and it gets hit several times a year.", "NA");
        Facts tajMahalF = new Facts("The construction of the Taj Mahal took 20 years and 20,000 workers to complete and the mausoleum houses not just the body of Mumtaz Mahal but also Shah Jahan himself.", "That Shah Jahan wanted the Taj Mahal to be uncopiable, and so he had the artisans hands cut-off to ensure they could never replicate such a feat ever again");
        factsRepo.save(colosseumF);
        factsRepo.save(chichenItzaF);
        factsRepo.save(alKhaznaF);
        factsRepo.save(greatWallofChinaF);
        factsRepo.save(machuPicchuF);
        factsRepo.save(redeemerStatueF);
        factsRepo.save(tajMahalF);

        WorldWonders colosseumW = new WorldWonders("Colosseum", "Rome, Italy", colosseumN, colosseumF,"org.wecancodeit.mysteryeducator/resources/images/colosseum.jpg");
        WorldWonders chichenItzaW = new WorldWonders("Chichen Itza", "Yucatan, Mexico", chichenItzaN, chichenItzaF,"org.wecancodeit.mysteryeducator/resources/images/ChichenItza.jpg");
        WorldWonders alKhaznaW = new WorldWonders("Al Khazna", "Petra, Jordan", alKhaznaN, alKhaznaF, "org.wecancodeit.mysteryeducator/resources/images/Alkhazna.jpg");
        WorldWonders greatWallofChinaW = new WorldWonders("The Great Wall of China", "Beijing, China", greatWallofChinaN, greatWallofChinaF,"org.wecancodeit.mysteryeducator/resources/images/great_wall_china.jpg");
        WorldWonders machuPicchuW = new WorldWonders("Machu Picchu", "Cusco, Peru", machuPicchuN, machuPicchuF,"org.wecancodeit.mysteryeducator/resources/images/machu-picchu-sectors.jpg");
        WorldWonders redeemerStatueW = new WorldWonders("Christ the Redeemer", "Rio de Janeiro, Brazil", redeemerStatueN, redeemerStatueF,"org.wecancodeit.mysteryeducator/resources/images/redeemerStatue.jpg");
        WorldWonders tajMahalW = new WorldWonders("Taj Mahal", "Agra, India", tajMahalN, tajMahalF,"org.wecancodeit.mysteryeducator/resources/images/tajMahal.jpg");
        worldWondersRepo.save(colosseumW);
        worldWondersRepo.save(chichenItzaW);
        worldWondersRepo.save(alKhaznaW);
        worldWondersRepo.save(greatWallofChinaW);
        worldWondersRepo.save(machuPicchuW);
        worldWondersRepo.save(redeemerStatueW);
        worldWondersRepo.save(tajMahalW);


    }
}
