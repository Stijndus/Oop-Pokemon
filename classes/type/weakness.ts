import { EnergyTypes } from "./types";
import { Weakness } from "../weakness";

export class Weaknesses {
  public static Fighting = new Weakness(EnergyTypes.Fighting, 1.5);
  public static Normal = new Weakness(EnergyTypes.Normal, 1.5);
  public static Flying = new Weakness(EnergyTypes.Flying, 1.5);
  public static Posion = new Weakness(EnergyTypes.Posion, 1.5);
  public static Ground = new Weakness(EnergyTypes.Ground, 1.5);
  public static Rock = new Weakness(EnergyTypes.Rock, 1.5);
  public static Bug = new Weakness(EnergyTypes.Bug, 1.5);
  public static Ghost = new Weakness(EnergyTypes.Ghost, 1.5);
  public static Steel = new Weakness(EnergyTypes.Steel, 1.5);
  public static Fire = new Weakness(EnergyTypes.Fire, 1.5);
  public static Water = new Weakness(EnergyTypes.Water, 1.5);
  public static Grass = new Weakness(EnergyTypes.Grass, 1.5);
  public static Electric = new Weakness(EnergyTypes.Electric, 1.5);
  public static Psychic = new Weakness(EnergyTypes.Psychic, 1.5);
  public static Ice = new Weakness(EnergyTypes.Ice, 1.5);
  public static Dragon = new Weakness(EnergyTypes.Dragon, 1.5);
  public static Dark = new Weakness(EnergyTypes.Dark, 1.5);
  public static Fairy = new Weakness(EnergyTypes.Fairy, 1.5);
}
