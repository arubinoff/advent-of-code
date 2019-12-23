const input = [3,62,1001,62,11,10,109,2251,105,1,0,1544,1754,1952,705,2088,571,1120,1388,1921,1223,798,1025,1723,1688,2018,1153,1851,1355,1616,1585,1192,1091,1820,670,1890,2218,2121,1058,829,862,1985,1322,1785,736,767,984,637,2152,1653,953,1254,922,2187,1289,1423,2055,1493,893,1454,600,0,0,0,0,0,0,0,0,0,0,0,0,3,64,1008,64,-1,62,1006,62,88,1006,61,170,1106,0,73,3,65,20102,1,64,1,21001,66,0,2,21102,105,1,0,1106,0,436,1201,1,-1,64,1007,64,0,62,1005,62,73,7,64,67,62,1006,62,73,1002,64,2,132,1,132,68,132,1001,0,0,62,1001,132,1,140,8,0,65,63,2,63,62,62,1005,62,73,1002,64,2,161,1,161,68,161,1101,1,0,0,1001,161,1,169,102,1,65,0,1102,1,1,61,1102,0,1,63,7,63,67,62,1006,62,203,1002,63,2,194,1,68,194,194,1006,0,73,1001,63,1,63,1105,1,178,21102,210,1,0,105,1,69,1201,1,0,70,1102,0,1,63,7,63,71,62,1006,62,250,1002,63,2,234,1,72,234,234,4,0,101,1,234,240,4,0,4,70,1001,63,1,63,1106,0,218,1105,1,73,109,4,21102,1,0,-3,21101,0,0,-2,20207,-2,67,-1,1206,-1,293,1202,-2,2,283,101,1,283,283,1,68,283,283,22001,0,-3,-3,21201,-2,1,-2,1106,0,263,21201,-3,0,-3,109,-4,2105,1,0,109,4,21102,1,1,-3,21102,0,1,-2,20207,-2,67,-1,1206,-1,342,1202,-2,2,332,101,1,332,332,1,68,332,332,22002,0,-3,-3,21201,-2,1,-2,1106,0,312,21202,-3,1,-3,109,-4,2106,0,0,109,1,101,1,68,359,20101,0,0,1,101,3,68,366,21001,0,0,2,21101,376,0,0,1106,0,436,22102,1,1,0,109,-1,2106,0,0,1,2,4,8,16,32,64,128,256,512,1024,2048,4096,8192,16384,32768,65536,131072,262144,524288,1048576,2097152,4194304,8388608,16777216,33554432,67108864,134217728,268435456,536870912,1073741824,2147483648,4294967296,8589934592,17179869184,34359738368,68719476736,137438953472,274877906944,549755813888,1099511627776,2199023255552,4398046511104,8796093022208,17592186044416,35184372088832,70368744177664,140737488355328,281474976710656,562949953421312,1125899906842624,109,8,21202,-6,10,-5,22207,-7,-5,-5,1205,-5,521,21101,0,0,-4,21101,0,0,-3,21101,0,51,-2,21201,-2,-1,-2,1201,-2,385,471,20102,1,0,-1,21202,-3,2,-3,22207,-7,-1,-5,1205,-5,496,21201,-3,1,-3,22102,-1,-1,-5,22201,-7,-5,-7,22207,-3,-6,-5,1205,-5,515,22102,-1,-6,-5,22201,-3,-5,-3,22201,-1,-4,-4,1205,-2,461,1105,1,547,21102,1,-1,-4,21202,-6,-1,-6,21207,-7,0,-5,1205,-5,547,22201,-7,-6,-7,21201,-4,1,-4,1105,1,529,22101,0,-4,-7,109,-8,2105,1,0,109,1,101,1,68,564,20101,0,0,0,109,-1,2106,0,0,1102,1,53051,66,1102,1,1,67,1102,1,598,68,1101,0,556,69,1102,1,0,71,1102,600,1,72,1105,1,73,1,1722,1101,0,5077,66,1102,1,4,67,1102,627,1,68,1101,0,302,69,1101,1,0,71,1101,0,635,72,1105,1,73,0,0,0,0,0,0,0,0,35,174302,1102,47779,1,66,1101,0,2,67,1102,1,664,68,1101,0,302,69,1101,1,0,71,1102,1,668,72,1106,0,73,0,0,0,0,16,39722,1101,0,85669,66,1101,3,0,67,1101,0,697,68,1101,302,0,69,1102,1,1,71,1101,703,0,72,1105,1,73,0,0,0,0,0,0,16,79444,1101,0,12791,66,1101,0,1,67,1102,1,732,68,1101,556,0,69,1101,1,0,71,1101,0,734,72,1106,0,73,1,12,32,39367,1102,9067,1,66,1101,1,0,67,1101,0,763,68,1101,556,0,69,1101,0,1,71,1101,0,765,72,1106,0,73,1,-9965,16,59583,1102,77999,1,66,1102,1,1,67,1101,0,794,68,1101,0,556,69,1101,1,0,71,1101,0,796,72,1105,1,73,1,-83,23,85669,1101,2663,0,66,1101,0,1,67,1102,825,1,68,1101,0,556,69,1101,0,1,71,1102,827,1,72,1105,1,73,1,-12653,6,23053,1102,1,2659,66,1101,2,0,67,1102,856,1,68,1102,302,1,69,1101,0,1,71,1102,1,860,72,1106,0,73,0,0,0,0,18,209697,1101,0,1579,66,1101,0,1,67,1102,1,889,68,1101,0,556,69,1102,1,1,71,1101,891,0,72,1105,1,73,1,23,14,17571,1101,0,98467,66,1101,1,0,67,1101,920,0,68,1102,556,1,69,1101,0,0,71,1101,922,0,72,1105,1,73,1,1270,1102,6599,1,66,1101,0,1,67,1102,949,1,68,1101,0,556,69,1101,1,0,71,1101,951,0,72,1105,1,73,1,421,23,171338,1102,1,84857,66,1102,1,1,67,1101,980,0,68,1102,1,556,69,1102,1,1,71,1102,982,1,72,1106,0,73,1,55931,31,49363,1102,87151,1,66,1101,6,0,67,1102,1011,1,68,1101,302,0,69,1102,1,1,71,1101,1023,0,72,1106,0,73,0,0,0,0,0,0,0,0,0,0,0,0,30,185798,1101,0,44893,66,1102,1,2,67,1101,0,1052,68,1101,302,0,69,1102,1,1,71,1102,1,1056,72,1105,1,73,0,0,0,0,48,426815,1102,1,89681,66,1102,1,1,67,1102,1,1085,68,1102,556,1,69,1101,2,0,71,1102,1087,1,72,1106,0,73,1,10,49,10154,35,348604,1101,42157,0,66,1102,1,1,67,1101,0,1118,68,1101,556,0,69,1102,1,0,71,1101,0,1120,72,1105,1,73,1,1351,1101,23053,0,66,1101,0,2,67,1102,1,1147,68,1101,302,0,69,1102,1,1,71,1102,1151,1,72,1105,1,73,0,0,0,0,36,47779,1102,24967,1,66,1102,1,5,67,1101,0,1180,68,1101,0,302,69,1101,0,1,71,1102,1190,1,72,1105,1,73,0,0,0,0,0,0,0,0,0,0,18,69899,1101,0,19163,66,1102,1,1,67,1102,1,1219,68,1102,556,1,69,1101,0,1,71,1102,1221,1,72,1106,0,73,1,32,45,7879,1101,0,82267,66,1101,0,1,67,1101,1250,0,68,1101,556,0,69,1102,1,1,71,1101,1252,0,72,1105,1,73,1,-2,15,124835,1102,71569,1,66,1101,3,0,67,1102,1281,1,68,1101,302,0,69,1101,0,1,71,1101,0,1287,72,1105,1,73,0,0,0,0,0,0,38,180398,1101,0,34361,66,1102,2,1,67,1102,1316,1,68,1102,1,302,69,1102,1,1,71,1102,1,1320,72,1106,0,73,0,0,0,0,32,78734,1102,1,49363,66,1102,2,1,67,1101,0,1349,68,1101,0,302,69,1102,1,1,71,1102,1,1353,72,1105,1,73,0,0,0,0,25,1198,1102,101293,1,66,1102,1,1,67,1102,1,1382,68,1101,556,0,69,1102,1,2,71,1101,1384,0,72,1106,0,73,1,439,15,99868,40,71569,1101,0,33769,66,1102,1,1,67,1102,1415,1,68,1102,556,1,69,1102,3,1,71,1102,1417,1,72,1106,0,73,1,5,49,5077,49,20308,35,87151,1101,0,38651,66,1102,1,1,67,1101,0,1450,68,1102,556,1,69,1101,1,0,71,1101,1452,0,72,1106,0,73,1,16763,43,68722,1102,85363,1,66,1101,0,5,67,1102,1481,1,68,1102,1,302,69,1102,1,1,71,1101,0,1491,72,1106,0,73,0,0,0,0,0,0,0,0,0,0,28,5318,1101,0,8969,66,1101,1,0,67,1101,0,1520,68,1102,1,556,69,1102,11,1,71,1102,1,1522,72,1105,1,73,1,1,23,257007,6,46106,36,95558,14,5857,43,34361,32,118101,31,98726,25,599,4,105722,11,89786,40,143138,1102,1,68891,66,1101,1,0,67,1102,1571,1,68,1101,556,0,69,1102,1,6,71,1102,1,1573,72,1106,0,73,1,25970,28,2659,38,90199,38,270597,13,5659,13,11318,13,16977,1102,23593,1,66,1102,1,1,67,1102,1612,1,68,1101,556,0,69,1102,1,1,71,1101,1614,0,72,1106,0,73,1,37,15,74901,1102,1,69899,66,1102,4,1,67,1102,1643,1,68,1101,253,0,69,1102,1,1,71,1102,1651,1,72,1106,0,73,0,0,0,0,0,0,0,0,30,92899,1101,0,90199,66,1102,3,1,67,1102,1,1680,68,1101,302,0,69,1102,1,1,71,1102,1686,1,72,1105,1,73,0,0,0,0,0,0,18,139798,1102,5659,1,66,1102,1,3,67,1102,1,1715,68,1101,302,0,69,1102,1,1,71,1102,1721,1,72,1105,1,73,0,0,0,0,0,0,18,279596,1102,51551,1,66,1101,1,0,67,1101,0,1750,68,1101,0,556,69,1101,1,0,71,1102,1,1752,72,1106,0,73,1,-132,40,214707,1102,1,44269,66,1102,1,1,67,1102,1781,1,68,1101,0,556,69,1102,1,1,71,1102,1,1783,72,1106,0,73,1,8,48,341452,1101,39367,0,66,1101,0,3,67,1102,1,1812,68,1102,1,302,69,1102,1,1,71,1101,0,1818,72,1106,0,73,0,0,0,0,0,0,16,99305,1101,88471,0,66,1101,0,1,67,1102,1,1847,68,1102,556,1,69,1102,1,1,71,1101,1849,0,72,1105,1,73,1,-46,14,11714,1101,0,19861,66,1101,5,0,67,1101,0,1878,68,1102,1,253,69,1102,1,1,71,1101,1888,0,72,1105,1,73,0,0,0,0,0,0,0,0,0,0,45,15758,1102,3889,1,66,1102,1,1,67,1102,1,1917,68,1101,556,0,69,1102,1,1,71,1102,1,1919,72,1105,1,73,1,11,15,49934,1102,1,98369,66,1101,1,0,67,1102,1,1948,68,1102,1,556,69,1101,0,1,71,1101,0,1950,72,1105,1,73,1,125,49,15231,1102,85091,1,66,1101,1,0,67,1101,0,1979,68,1102,1,556,69,1102,1,2,71,1102,1,1981,72,1106,0,73,1,19,14,23428,48,170726,1102,92899,1,66,1101,0,2,67,1101,2012,0,68,1101,351,0,69,1101,0,1,71,1101,2016,0,72,1106,0,73,0,0,0,0,255,68891,1101,0,5857,66,1101,0,4,67,1102,1,2045,68,1102,302,1,69,1101,1,0,71,1101,2053,0,72,1105,1,73,0,0,0,0,0,0,0,0,16,19861,1101,7879,0,66,1102,2,1,67,1101,0,2082,68,1101,302,0,69,1101,0,1,71,1102,1,2086,72,1105,1,73,0,0,0,0,15,24967,1102,1,52861,66,1102,2,1,67,1102,1,2115,68,1101,0,302,69,1102,1,1,71,1102,1,2119,72,1105,1,73,0,0,0,0,11,44893,1101,0,31081,66,1101,0,1,67,1101,2148,0,68,1101,556,0,69,1102,1,1,71,1102,2150,1,72,1106,0,73,1,160,35,522906,1101,44497,0,66,1102,1,1,67,1102,1,2179,68,1102,1,556,69,1102,3,1,71,1102,1,2181,72,1106,0,73,1,2,48,256089,35,261453,35,435755,1102,81157,1,66,1102,1,1,67,1102,2214,1,68,1102,556,1,69,1101,0,1,71,1102,1,2216,72,1105,1,73,1,107,48,85363,1102,1,599,66,1102,1,2,67,1102,2245,1,68,1101,0,302,69,1102,1,1,71,1102,2249,1,72,1105,1,73,0,0,0,0,4,52861];

const POS_MODE = '0'; // val = position in array
const IMM_MODE = '1'; // val = value. will never be used for params it writes to
const REL_MODE = '2'; // val = position in array + relative base

function run(inputVals) {
  const program = [...input];
  let relativeBase = 0;
  let ip = 0;
  while (program[ip] !== 99) {
    let inst = `${program[ip]}`;
    let opcode = inst.length === 1 ? Number(inst) : Number(inst.substr(-2));
    let modes = inst.substring(0, inst.length-2).split('').reverse();
    let a = program[ip+1];
    let b = program[ip+2];
    let c = program[ip+3];

    let valA = modes[0] === IMM_MODE ? a : (modes[0] === REL_MODE ? program[a + relativeBase] : program[a]);
    let valB = modes[1] === IMM_MODE ? b : (modes[1] === REL_MODE ? program[b + relativeBase] : program[b]);
    let indexC = modes[2] === REL_MODE ? c + relativeBase : c;
    valA = valA ? valA : 0;
    valB = valB ? valB : 0;

    let advAmt = 0;
    switch (opcode) {
      case 1:
        advAmt = 4;
        program[indexC] = valA + valB;
        break;
      case 2:
        advAmt = 4;
        program[indexC] = valA * valB;
        break;
      case 3:
        // input
        advAmt = 2;
        let index = modes[0] === REL_MODE ? a + relativeBase : a;
        program[index] = inputVals.shift();
        break;
      case 4:
        // output
        advAmt = 2;
        console.log(valA);
        break;
      case 5:
        if (valA) {
          ip = valB;
        } else {
          advAmt = 3;
        }
        break;
      case 6:
        if (!valA) {
          ip = valB;
        } else {
          advAmt = 3;
        }
        break;
      case 7:
        program[indexC] = valA < valB ? 1 : 0;
        advAmt = 4;
        break;
      case 8:
        program[indexC] = valA === valB ? 1 : 0;
        advAmt = 4;
        break;
      case 9:
        relativeBase += valA;
        advAmt = 2;
        break;  
      default:
        console.log(`unhandled opcode ${opcode}`);
        return;
    }
    ip += advAmt;
  }
}