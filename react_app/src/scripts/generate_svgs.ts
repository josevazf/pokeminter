// @ts-nocheck
import axios from 'axios';
import * as fs from 'fs';
import { typeColors, typeSizes } from '../utils/typeRefs';

var pokemonLimit = 151;

// Gets all pokemons from API up to `pokemonLimit`
async function getPokemons(): Promise<any> {
  var pokeEndpoints: any[] = [];
  var pokeSpeciesEndpoints: any[] = [];

  for (var i = 1; i <= pokemonLimit; i++) {
    pokeEndpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
    pokeSpeciesEndpoints.push(`https://pokeapi.co/api/v2/pokemon-species/${i}/`)
  }
  const pokemonResponses = await axios.all(
    pokeEndpoints.map((endpoint1) => axios.get(endpoint1))
  );
  const pokemonSpeciesResponses = await axios.all(
    pokeSpeciesEndpoints.map((endpoint2) => axios.get(endpoint2))
  )

  // Output the JSON data to the console
  //fs.writeFileSync('./foo.txt', JSON.stringify(dataToWrite, null, 2));
  return [pokemonResponses, pokemonSpeciesResponses];
};

// Break Pokémon description text to fit the card
function breakText(text: string): [string, string] {
  const words = text.split(' ');
  let firstPart = '';
  let secondPart = '';

  for (const word of words) {
      const tempFirstPart = firstPart + (firstPart ? ' ' : '') + word;
      if (tempFirstPart.length <= 64) {
          firstPart = tempFirstPart;
      } else {
          secondPart = (secondPart ? secondPart + ' ' : '') + word;
      }
  }
  return [firstPart, secondPart];
}

// Updates the SVG Template with the Pokémon info
async function updateSVGTemplate(
  template: string,
  name: string,
  number: string,
  color: string,
  image: string,
  height: string,
  weight: string,
  ability1: string,
  ability2: string,
  ability1_y: string,
  HP: string,
  ATK: string,
  DEF: string,
  SATK: string,
  SDEF: string,
  SPD: string,
  HP_bar: string,
  ATK_bar: string,
  DEF_bar: string,
  SATK_bar: string,
  SDEF_bar: string,
  SPD_bar: string,
  description1: string,
  description2: string,
  type1txt: string,
  type2txt: string,
  type1color: string,
  type2color: string,
  type1w: string,
  type2w: string,
  type1color_x: string,
  type1txt_x: string
): Promise<string> {
  const updatedTemplate = template
      .replace('{name}', name)
      .replace('{number}', number)
      .replace(/{color}/g, color)
      .replace('{image}', image)
      .replace('{height}', height)
      .replace('{weight}', weight)
      .replace('{ability1}', ability1)
      .replace('{ability2}', ability2)
      .replace('{ability1_y}', ability1_y)
      .replace('{HP}', HP)
      .replace('{ATK}', ATK)
      .replace('{DEF}', DEF)
      .replace('{SATK}', SATK)
      .replace('{SDEF}', SDEF)
      .replace('{SPD}', SPD)
      .replace('{HP_bar}', HP_bar)
      .replace('{ATK_bar}', ATK_bar)
      .replace('{DEF_bar}', DEF_bar)
      .replace('{SATK_bar}', SATK_bar)
      .replace('{SDEF_bar}', SDEF_bar)
      .replace('{SPD_bar}', SPD_bar)
      .replace('{description1}', description1)
      .replace('{description2}', description2)
      .replace('{type1txt}', type1txt)
      .replace('{type2txt}', type2txt)
      .replace('{type1color}', type1color)
      .replace('{type2color}', type2color)
      .replace('{type1w}', type1w)
      .replace('{type2w}', type2w)
      .replace('{type1color_x}', type1color_x)
      .replace('{type1txt_x}', type1txt_x)
  return updatedTemplate;
}

async function main() {
  try {
    const template = fs.readFileSync('./poke_template.svg', 'utf-8');
    const [pokemonData, pokemonSpeciesData] = await getPokemons();

    for (let i = 0; i < pokemonData.length; i++ ) {
      const name = pokemonData[i].data.name.charAt(0).toUpperCase() + pokemonData[i].data.name.slice(1);
      const id = pokemonData[i].data.id;
      const color = typeColors[pokemonData[i].data.types[0].type.name.toLowerCase()];
      const number = `#${String(id).padStart(3, '0')}`;
      const image = pokemonData[i].data.sprites.other['official-artwork'].front_default;
      const height = pokemonData[i].data.height;
      const weight = pokemonData[i].data.weight;
      const ability1 = pokemonData[i].data.abilities[0] && 
        pokemonData[i].data.abilities[0].ability.name.charAt(0).toUpperCase() + 
        pokemonData[i].data.abilities[0].ability.name.slice(1)
      const ability2 = pokemonData[i].data.abilities[1] ? 
        pokemonData[i].data.abilities[1].ability.name.charAt(0).toUpperCase() + 
        pokemonData[i].data.abilities[1].ability.name.slice(1) : 
        "";
      const ability1_y = pokemonData[i].data.abilities[1] ? `"${"359.5"}"` : `"${"367.5"}"`;
      const HP = pokemonData[i].data.stats[0].base_stat;
      const ATK = pokemonData[i].data.stats[1].base_stat;
      const DEF = pokemonData[i].data.stats[2].base_stat;
      const SATK = pokemonData[i].data.stats[3].base_stat;
      const SDEF = pokemonData[i].data.stats[4].base_stat;
      const SPD = pokemonData[i].data.stats[5].base_stat;
      const description = pokemonSpeciesData[i].data.flavor_text_entries[1].flavor_text.replace(/\u000C/g, ' ').replace(/POKéMON/g, "Pokémon");
      const [description1, description2] = breakText(description);
      const type1txt = pokemonData[i].data.types[0].type.name.toLowerCase();
      const type2txt = pokemonData[i].data.types[1] ? pokemonData[i].data.types[1].type.name.toLowerCase(): "";
      const type1color = typeColors[pokemonData[i].data.types[0].type.name.toLowerCase()];
      const type2color = pokemonData[i].data.types[1] ? typeColors[pokemonData[i].data.types[1].type.name.toLowerCase()] : "";
      const type1w = typeSizes[pokemonData[i].data.types[0].type.name.toLowerCase()];
      const type2w = pokemonData[i].data.types[1] ? typeSizes[pokemonData[i].data.types[1].type.name.toLowerCase()] : "";
      const type1color_x = pokemonData[i].data.types[1] ? 172 - type1w : 180 - (type1w / 2);
      const type1txt_x = pokemonData[i].data.types[1] ? 172 - type1w + 8 : type1color_x + 8;

      const updatedTemplate = await updateSVGTemplate(
        template,
        name,
        number,
        color,
        image,
        height,
        weight,
        ability1,
        ability2,
        ability1_y,
        String(HP).padStart(3, '0'),
        String(ATK).padStart(3, '0'),
        String(DEF).padStart(3, '0'),
        String(SATK).padStart(3, '0'),
        String(SDEF).padStart(3, '0'),
        String(SPD).padStart(3, '0'),
        String(parseInt(HP) / 255 * 233),
        String(parseInt(ATK) / 255 * 233),
        String(parseInt(DEF) / 255 * 233),
        String(parseInt(SATK) / 255 * 233),
        String(parseInt(SDEF) / 255 * 233),
        String(parseInt(SPD) / 255 * 233),
        description1,
        description2,
        type1txt,
        type2txt,
        type1color,
        type2color,        
        String(type1w),
        String(type2w),
        String(type1color_x),
        String(type1txt_x),
      );

      // Create SVG file for each pokemon
      fs.writeFileSync(`./out/poke_${String(number).padStart(3, '0')}.svg`, updatedTemplate);
  }
    //console.log("Pokemon data fetched:", data);
  } catch (error) {
    console.error("Error fetching Pokemon data:", error);
  }
};

main();