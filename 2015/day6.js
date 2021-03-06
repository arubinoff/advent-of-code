var sumBrightness = function(grid){
    var total = 0;
    for(var i = 0; i < 1000; i++){
        for(var j = 0; j < 1000; j++){
            total += grid[i][j];
        }
    }
    return total;
}

var applyInstructions = function(input, grid, on, off, toggle) {
    for(var i = 0; i < input.length; i++){
        var inst = input[i];
        var todo = inst[0];
        var start = inst[1];
        var end = inst[2];
        for(var j = start[0]; j <= end[0]; j++){
            for(var k = start[1]; k <= end[1]; k++){
                if(todo === 'turn on') {
                    on(grid, j, k);
                } else if (todo === 'turn off') {
                    off(grid, j, k);
                } else { //toggle
                    toggle(grid, j, k);
                }
            }
        }
    }
}

var generateGrid = function() {
    var grid = [];
    //generate initial grid - probably better way to do this? whatever
    for(var i = 0; i < 1000; i++){
        var row = [];
        for(var j = 0; j < 1000; j++){
            row.push(0);
        }
        grid.push(row);
    }
    return grid;
}

var input = [['turn off',[660,55],[986,197]],['turn off',[341,304],[638,850]],['turn off',[199,133],[461,193]],['toggle',[322,558],[977,958]],['toggle',[537,781],[687,941]],['turn on',[226,196],[599,390]],['turn on',[240,129],[703,297]],['turn on',[317,329],[451,798]],['turn on',[957,736],[977,890]],['turn on',[263,530],[559,664]],['turn on',[158,270],[243,802]],['toggle',[223,39],[454,511]],['toggle',[544,218],[979,872]],['turn on',[313,306],[363,621]],['toggle',[173,401],[496,407]],['toggle',[333,60],[748,159]],['turn off',[87,577],[484,608]],['turn on',[809,648],[826,999]],['toggle',[352,432],[628,550]],['turn off',[197,408],[579,569]],['turn off',[1,629],[802,633]],['turn off',[61,44],[567,111]],['toggle',[880,25],[903,973]],['turn on',[347,123],[864,746]],['toggle',[728,877],[996,975]],['turn on',[121,895],[349,906]],['turn on',[888,547],[931,628]],['toggle',[398,782],[834,882]],['turn on',[966,850],[989,953]],['turn off',[891,543],[914,991]],['toggle',[908,77],[916,117]],['turn on',[576,900],[943,934]],['turn off',[580,170],[963,206]],['turn on',[184,638],[192,944]],['toggle',[940,147],[978,730]],['turn off',[854,56],[965,591]],['toggle',[717,172],[947,995]],['toggle',[426,987],[705,998]],['turn on',[987,157],[992,278]],['toggle',[995,774],[997,784]],['turn off',[796,96],[845,182]],['turn off',[451,87],[711,655]],['turn off',[380,93],[968,676]],['turn on',[263,468],[343,534]],['turn on',[917,936],[928,959]],['toggle',[478,7],[573,148]],['turn off',[428,339],[603,624]],['turn off',[400,880],[914,953]],['toggle',[679,428],[752,779]],['turn off',[697,981],[709,986]],['toggle',[482,566],[505,725]],['turn off',[956,368],[993,516]],['toggle',[735,823],[783,883]],['turn off',[48,487],[892,496]],['turn off',[116,680],[564,819]],['turn on',[633,865],[729,930]],['turn off',[314,618],[571,922]],['toggle',[138,166],[936,266]],['turn on',[444,732],[664,960]],['turn off',[109,337],[972,497]],['turn off',[51,432],[77,996]],['turn off',[259,297],[366,744]],['toggle',[801,130],[917,544]],['toggle',[767,982],[847,996]],['turn on',[216,507],[863,885]],['turn off',[61,441],[465,731]],['turn on',[849,970],[944,987]],['toggle',[845,76],[852,951]],['toggle',[732,615],[851,936]],['toggle',[251,128],[454,778]],['turn on',[324,429],[352,539]],['toggle',[52,450],[932,863]],['turn off',[449,379],[789,490]],['turn on',[317,319],[936,449]],['toggle',[887,670],[957,838]],['toggle',[671,613],[856,664]],['turn off',[186,648],[985,991]],['turn off',[471,689],[731,717]],['toggle',[91,331],[750,758]],['toggle',[201,73],[956,524]],['toggle',[82,614],[520,686]],['toggle',[84,287],[467,734]],['turn off',[132,367],[208,838]],['toggle',[558,684],[663,920]],['turn on',[237,952],[265,997]],['turn on',[694,713],[714,754]],['turn on',[632,523],[862,827]],['turn on',[918,780],[948,916]],['turn on',[349,586],[663,976]],['toggle',[231,29],[257,589]],['toggle',[886,428],[902,993]],['turn on',[106,353],[236,374]],['turn on',[734,577],[759,684]],['turn off',[347,843],[696,912]],['turn on',[286,699],[964,883]],['turn on',[605,875],[960,987]],['turn off',[328,286],[869,461]],['turn off',[472,569],[980,848]],['toggle',[673,573],[702,884]],['turn off',[398,284],[738,332]],['turn on',[158,50],[284,411]],['turn off',[390,284],[585,663]],['turn on',[156,579],[646,581]],['turn on',[875,493],[989,980]],['toggle',[486,391],[924,539]],['turn on',[236,722],[272,964]],['toggle',[228,282],[470,581]],['toggle',[584,389],[750,761]],['turn off',[899,516],[900,925]],['turn on',[105,229],[822,846]],['turn off',[253,77],[371,877]],['turn on',[826,987],[906,992]],['turn off',[13,152],[615,931]],['turn on',[835,320],[942,399]],['turn on',[463,504],[536,720]],['toggle',[746,942],[786,998]],['turn off',[867,333],[965,403]],['turn on',[591,477],[743,692]],['turn off',[403,437],[508,908]],['turn on',[26,723],[368,814]],['turn on',[409,485],[799,809]],['turn on',[115,630],[704,705]],['turn off',[228,183],[317,220]],['toggle',[300,649],[382,842]],['turn off',[495,365],[745,562]],['turn on',[698,346],[744,873]],['turn on',[822,932],[951,934]],['toggle',[805,30],[925,421]],['toggle',[441,152],[653,274]],['toggle',[160,81],[257,587]],['turn off',[350,781],[532,917]],['toggle',[40,583],[348,636]],['turn on',[280,306],[483,395]],['toggle',[392,936],[880,955]],['toggle',[496,591],[851,934]],['turn off',[780,887],[946,994]],['turn off',[205,735],[281,863]],['toggle',[100,876],[937,915]],['turn on',[392,393],[702,878]],['turn on',[956,374],[976,636]],['toggle',[478,262],[894,775]],['turn off',[279,65],[451,677]],['turn on',[397,541],[809,847]],['turn on',[444,291],[451,586]],['toggle',[721,408],[861,598]],['turn on',[275,365],[609,382]],['turn on',[736,24],[839,72]],['turn off',[86,492],[582,712]],['turn on',[676,676],[709,703]],['turn off',[105,710],[374,817]],['toggle',[328,748],[845,757]],['toggle',[335,79],[394,326]],['toggle',[193,157],[633,885]],['turn on',[227,48],[769,743]],['toggle',[148,333],[614,568]],['toggle',[22,30],[436,263]],['toggle',[547,447],[688,969]],['toggle',[576,621],[987,740]],['turn on',[711,334],[799,515]],['turn on',[541,448],[654,951]],['toggle',[792,199],[798,990]],['turn on',[89,956],[609,960]],['toggle',[724,433],[929,630]],['toggle',[144,895],[201,916]],['toggle',[226,730],[632,871]],['turn off',[760,819],[828,974]],['toggle',[887,180],[940,310]],['toggle',[222,327],[805,590]],['turn off',[630,824],[885,963]],['turn on',[940,740],[954,946]],['turn on',[193,373],[779,515]],['toggle',[304,955],[469,975]],['turn off',[405,480],[546,960]],['turn on',[662,123],[690,669]],['turn off',[615,238],[750,714]],['turn on',[423,220],[930,353]],['turn on',[329,769],[358,970]],['toggle',[590,151],[704,722]],['turn off',[884,539],[894,671]],['toggle',[449,241],[984,549]],['toggle',[449,260],[496,464]],['turn off',[306,448],[602,924]],['turn on',[286,805],[555,901]],['toggle',[722,177],[922,298]],['toggle',[491,554],[723,753]],['turn on',[80,849],[174,996]],['turn off',[296,561],[530,856]],['toggle',[653,10],[972,284]],['toggle',[529,236],[672,614]],['toggle',[791,598],[989,695]],['turn on',[19,45],[575,757]],['toggle',[111,55],[880,871]],['turn off',[197,897],[943,982]],['turn on',[912,336],[977,605]],['toggle',[101,221],[537,450]],['turn on',[101,104],[969,447]],['toggle',[71,527],[587,717]],['toggle',[336,445],[593,889]],['toggle',[214,179],[575,699]],['turn on',[86,313],[96,674]],['toggle',[566,427],[906,888]],['turn off',[641,597],[850,845]],['turn on',[606,524],[883,704]],['turn on',[835,775],[867,887]],['toggle',[547,301],[897,515]],['toggle',[289,930],[413,979]],['turn on',[361,122],[457,226]],['turn on',[162,187],[374,746]],['turn on',[348,461],[454,675]],['turn off',[966,532],[985,537]],['turn on',[172,354],[630,606]],['turn off',[501,880],[680,993]],['turn off',[8,70],[566,592]],['toggle',[433,73],[690,651]],['toggle',[840,798],[902,971]],['toggle',[822,204],[893,760]],['turn off',[453,496],[649,795]],['turn off',[969,549],[990,942]],['turn off',[789,28],[930,267]],['toggle',[880,98],[932,434]],['toggle',[568,674],[669,753]],['turn on',[686,228],[903,271]],['turn on',[263,995],[478,999]],['toggle',[534,675],[687,955]],['turn off',[342,434],[592,986]],['toggle',[404,768],[677,867]],['toggle',[126,723],[978,987]],['toggle',[749,675],[978,959]],['turn off',[445,330],[446,885]],['turn off',[463,205],[924,815]],['turn off',[417,430],[915,472]],['turn on',[544,990],[912,999]],['turn off',[201,255],[834,789]],['turn off',[261,142],[537,862]],['turn off',[562,934],[832,984]],['turn off',[459,978],[691,980]],['turn off',[73,911],[971,972]],['turn on',[560,448],[723,810]],['turn on',[204,630],[217,854]],['turn off',[91,259],[611,607]],['turn on',[877,32],[978,815]],['turn off',[950,438],[974,746]],['toggle',[426,30],[609,917]],['toggle',[696,37],[859,201]],['toggle',[242,417],[682,572]],['turn off',[388,401],[979,528]],['turn off',[79,345],[848,685]],['turn off',[98,91],[800,434]],['toggle',[650,700],[972,843]],['turn off',[530,450],[538,926]],['turn on',[428,559],[962,909]],['turn on',[78,138],[92,940]],['toggle',[194,117],[867,157]],['toggle',[785,355],[860,617]],['turn off',[379,441],[935,708]],['turn off',[605,133],[644,911]],['toggle',[10,963],[484,975]],['turn off',[359,988],[525,991]],['turn off',[509,138],[787,411]],['toggle',[556,467],[562,773]],['turn on',[119,486],[246,900]],['turn on',[445,561],[794,673]],['turn off',[598,681],[978,921]],['turn off',[974,230],[995,641]],['turn off',[760,75],[800,275]],['toggle',[441,215],[528,680]],['turn off',[701,636],[928,877]],['turn on',[165,753],[202,780]],['toggle',[501,412],[998,516]],['toggle',[161,105],[657,395]],['turn on',[113,340],[472,972]],['toggle',[384,994],[663,999]],['turn on',[969,994],[983,997]],['turn on',[519,600],[750,615]],['turn off',[363,899],[948,935]],['turn on',[271,845],[454,882]],['turn off',[376,528],[779,640]],['toggle',[767,98],[854,853]],['toggle',[107,322],[378,688]],['turn off',[235,899],[818,932]],['turn on',[445,611],[532,705]],['toggle',[629,387],[814,577]],['toggle',[112,414],[387,421]],['toggle',[319,184],[382,203]],['turn on',[627,796],[973,940]],['toggle',[602,45],[763,151]],['turn off',[441,375],[974,545]],['toggle',[871,952],[989,998]],['turn on',[717,272],[850,817]],['toggle',[475,711],[921,882]],['toggle',[66,191],[757,481]],['turn off',[50,197],[733,656]],['toggle',[83,575],[915,728]],['turn on',[777,812],[837,912]],['turn on',[20,984],[571,994]],['turn off',[446,432],[458,648]],['turn on',[715,871],[722,890]],['toggle',[424,675],[740,862]],['toggle',[580,592],[671,900]],['toggle',[296,687],[906,775]]];

var grid = generateGrid();
var on1 = function(grid, j, k) { grid[j][k] = 1; };
var off1 = function(grid, j, k) { grid[j][k] = 0; };
var toggle1 = function(grid, j, k) { grid[j][k] = (grid[j][k] + 1) % 2; };

applyInstructions(input, grid, on1, off1, toggle1);

console.log(sumBrightness(grid) + ' lights are lit!');

grid = generateGrid();
var on2 = function(grid, j, k) { grid[j][k] += 1; };
var off2 = function(grid, j, k) { grid[j][k] = Math.max(grid[j][k] - 1, 0); };
var toggle2 = function(grid, j, k) { grid[j][k] += 2; };

applyInstructions(input, grid, on2, off2, toggle2);

console.log('After translating, the lights have ' + sumBrightness(grid) + ' brightness');

