export const getValueFromText = (value) => {
  switch (value) {
    case "blank":
      return "";
    case "two":
      return "2";
    case "four":
      return "4";
    case "eight":
      return "8";
    case "sixteen":
      return "16";
    case "thirtytwo":
      return "32";
    case "sixtyfour":
      return "64";
    case "onetwoeight":
      return "128";
    case "twofivesix":
      return "256";
    case "fivetwelve":
      return "512";
    case "onezerotwofour":
      return "1024";
    case "twentyfourtyeight":
      return "2048";
    case "fourzeroninesix":
      return "4096";  
    case "eightoneninetwo":
      return "8092";  
    case "sixteenthreeeightfour":
      return "16384";    
    case "thirtytwosevensixeight":
      return "32768";                        
    default:
      return "";
  }
};
