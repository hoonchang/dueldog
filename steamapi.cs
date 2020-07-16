using System;
using System.Net;
using Newtonsoft.Json.Linq;

public class Program
{
	public static bool checkName(string steamID){
		// Steam API key
		// NEED TO CHANGE
		string steamKey = "76F1B809946B1E27FBB3D57DC63870AC";

		// Get player summary
        WebClient c = new WebClient();
        var data = c.DownloadString("http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/" + "?key=" + steamKey + "&steamids=" + steamID);

		// Parse player summary
        JObject o = JObject.Parse(data);

		// Get player personaname
        string personaname = (string)o["response"]["players"][0]["personaname"];

		// Check if player personaname has dueldog.com or its common variations
		if(personaname.Contains("dueldog.com") | personaname.Contains("Dueldog.com") | personaname.Contains("DUELDOG.COM") | personaname.Contains("DuelDog.com"))
        {
        	return true;
        }
        return false;
	}
	public static void Main()
	{
		checkName("76561198252107330");
	}
}
