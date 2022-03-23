import { Resistance } from "../resistance";
import { EnergyTypes } from "./types";
export class Resistances{
  public static Fighting = new Resistance(EnergyTypes.Fighting, 20);
  public static Normal = new Resistance(EnergyTypes.Normal, 10);
  public static Flying = new Resistance(EnergyTypes.Flying, 15);
  public static Posion = new Resistance(EnergyTypes.Posion, 20);
  public static Ground = new Resistance(EnergyTypes.Ground, 17);
  public static Rock = new Resistance(EnergyTypes.Rock, 13);
  public static Bug = new Resistance(EnergyTypes.Bug, 19);
  public static Ghost = new Resistance(EnergyTypes.Ghost, 12);
  public static Steel = new Resistance(EnergyTypes.Steel, 21);
  public static Fire = new Resistance(EnergyTypes.Fire, 22);
  public static Water = new Resistance(EnergyTypes.Water, 11);
  public static Grass = new Resistance(EnergyTypes.Grass, 10);
  public static Electric = new Resistance(EnergyTypes.Electric, 24);
  public static Psychic = new Resistance(EnergyTypes.Psychic, 12);
  public static Ice = new Resistance(EnergyTypes.Ice, 25);
  public static Dragon = new Resistance(EnergyTypes.Dragon, 23);
  public static Dark = new Resistance(EnergyTypes.Dark, 15);
  public static Fairy = new Resistance(EnergyTypes.Fairy, 15);
}