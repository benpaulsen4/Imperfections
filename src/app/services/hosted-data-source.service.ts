import { Injectable } from "@angular/core";
import { DataSource } from "./data-source.interface";
import { Character } from "../models/character";
import { BehaviorSubject } from "rxjs";
import { RandomUtils } from "./utils/random-utils";
import { environment } from "../../environments/environment";

@Injectable()
export class HostedDataSourceService implements DataSource {
    readonly redFlagsFileName = "red-flags.json"
    readonly charactersFileName = "characters.json"
    readonly imagesPathExtension = "images/"

    private redFlags = new BehaviorSubject<string[]>([]);
    private characters = new BehaviorSubject<Character[]>([]);

    async cacheData(): Promise<void> {
        //If the data is already cached return
        if (this.redFlags.getValue().length > 0 && this.characters.getValue().length > 0) return;

        const tasks = [
            fetch(environment.hostedDataSourceBaseUrl + this.redFlagsFileName),
            fetch(environment.hostedDataSourceBaseUrl + this.charactersFileName)
        ]

        const responses = await Promise.all(tasks);

        if (!!responses.find(res => res.status > 300)) throw new Error('Data fetch failed')

        this.redFlags.next(await responses[0].json())

        const characters = (await responses[1].json() as Character[]).map((character) => {
            const imageFile = character.imgUrl;

            if (!!imageFile){
                character.imgUrl = environment.hostedDataSourceBaseUrl + this.imagesPathExtension + imageFile
            }

            return character;
        });

        this.characters.next(characters);
    }

    getThreeCharacters(): Character[] {
        const cachedCharacters = this.characters.getValue();
        if (cachedCharacters.length === 0) throw new Error("Character set not initialized")

        return RandomUtils.getXUniqueRandom(cachedCharacters, 3);
    }

    getThreeFlags(): string[] {
        const cachedFlags = this.redFlags.getValue();
        if (cachedFlags.length === 0) throw new Error("Red flag set not initialized")

        return RandomUtils.getXUniqueRandom(cachedFlags, 3);
    }
}