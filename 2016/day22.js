//location, used, avail
var input = [[[0,0],66,19],[[0,1],66,27],[[0,2],65,28],[[0,3],67,23],[[0,4],67,27],[[0,5],69,23],[[0,6],64,24],[[0,7],71,15],[[0,8],71,23],[[0,9],64,28],[[0,10],72,19],[[0,11],72,15],[[0,12],64,21],[[0,13],73,16],[[0,14],71,22],[[0,15],68,23],[[0,16],68,26],[[0,17],66,26],[[0,18],70,18],[[0,19],70,15],[[0,20],70,15],[[0,21],70,17],[[0,22],71,19],[[0,23],66,24],[[0,24],71,18],[[0,25],72,20],[[1,0],67,21],[[1,1],65,25],[[1,2],66,24],[[1,3],72,18],[[1,4],73,16],[[1,5],66,25],[[1,6],68,17],[[1,7],66,24],[[1,8],66,27],[[1,9],66,20],[[1,10],64,21],[[1,11],69,21],[[1,12],64,28],[[1,13],71,14],[[1,14],67,24],[[1,15],65,20],[[1,16],66,27],[[1,17],64,30],[[1,18],72,16],[[1,19],72,18],[[1,20],67,19],[[1,21],66,24],[[1,22],69,17],[[1,23],65,24],[[1,24],71,18],[[1,25],68,19],[[2,0],73,20],[[2,1],68,17],[[2,2],71,22],[[2,3],66,20],[[2,4],69,25],[[2,5],66,20],[[2,6],65,29],[[2,7],65,25],[[2,8],70,15],[[2,9],64,29],[[2,10],66,27],[[2,11],73,13],[[2,12],70,15],[[2,13],67,18],[[2,14],72,22],[[2,15],67,21],[[2,16],69,21],[[2,17],71,20],[[2,18],66,25],[[2,19],70,18],[[2,20],66,22],[[2,21],73,18],[[2,22],65,26],[[2,23],70,24],[[2,24],66,27],[[2,25],64,21],[[3,0],72,19],[[3,1],69,24],[[3,2],69,21],[[3,3],68,20],[[3,4],70,19],[[3,5],70,23],[[3,6],71,21],[[3,7],73,15],[[3,8],67,27],[[3,9],69,22],[[3,10],69,16],[[3,11],65,20],[[3,12],65,23],[[3,13],73,21],[[3,14],64,24],[[3,15],65,22],[[3,16],70,24],[[3,17],64,24],[[3,18],72,15],[[3,19],64,22],[[3,20],72,22],[[3,21],65,27],[[3,22],70,21],[[3,23],72,19],[[3,24],68,21],[[3,25],64,24],[[4,0],73,20],[[4,1],71,16],[[4,2],70,23],[[4,3],71,14],[[4,4],72,21],[[4,5],68,23],[[4,6],66,21],[[4,7],68,22],[[4,8],68,21],[[4,9],71,16],[[4,10],67,18],[[4,11],66,26],[[4,12],68,17],[[4,13],69,25],[[4,14],69,19],[[4,15],72,15],[[4,16],68,25],[[4,17],69,18],[[4,18],70,17],[[4,19],64,23],[[4,20],66,27],[[4,21],64,22],[[4,22],73,17],[[4,23],73,13],[[4,24],64,29],[[4,25],67,20],[[5,0],71,21],[[5,1],67,21],[[5,2],67,22],[[5,3],70,17],[[5,4],64,24],[[5,5],65,28],[[5,6],73,13],[[5,7],69,20],[[5,8],69,23],[[5,9],64,29],[[5,10],64,23],[[5,11],68,25],[[5,12],64,21],[[5,13],73,12],[[5,14],70,15],[[5,15],73,14],[[5,16],66,27],[[5,17],66,23],[[5,18],72,14],[[5,19],71,21],[[5,20],67,27],[[5,21],64,26],[[5,22],66,25],[[5,23],68,19],[[5,24],72,18],[[5,25],64,22],[[6,0],71,18],[[6,1],65,24],[[6,2],73,20],[[6,3],70,17],[[6,4],66,25],[[6,5],66,24],[[6,6],69,17],[[6,7],64,28],[[6,8],64,30],[[6,9],66,25],[[6,10],67,27],[[6,11],72,14],[[6,12],495,8],[[6,13],70,16],[[6,14],69,21],[[6,15],66,26],[[6,16],70,21],[[6,17],70,17],[[6,18],70,23],[[6,19],64,24],[[6,20],68,20],[[6,21],72,21],[[6,22],64,28],[[6,23],65,23],[[6,24],65,27],[[6,25],70,18],[[7,0],70,19],[[7,1],67,20],[[7,2],67,24],[[7,3],69,22],[[7,4],73,18],[[7,5],73,15],[[7,6],68,23],[[7,7],67,19],[[7,8],64,25],[[7,9],66,24],[[7,10],66,28],[[7,11],70,18],[[7,12],491,19],[[7,13],67,24],[[7,14],65,26],[[7,15],69,25],[[7,16],66,23],[[7,17],69,23],[[7,18],68,24],[[7,19],66,27],[[7,20],73,20],[[7,21],72,14],[[7,22],69,24],[[7,23],69,16],[[7,24],67,20],[[7,25],73,14],[[8,0],65,22],[[8,1],68,23],[[8,2],70,15],[[8,3],67,19],[[8,4],69,17],[[8,5],67,27],[[8,6],69,18],[[8,7],64,27],[[8,8],65,29],[[8,9],66,27],[[8,10],67,27],[[8,11],73,14],[[8,12],497,11],[[8,13],69,23],[[8,14],71,17],[[8,15],69,19],[[8,16],68,23],[[8,17],70,16],[[8,18],65,29],[[8,19],71,18],[[8,20],64,30],[[8,21],73,20],[[8,22],72,13],[[8,23],64,25],[[8,24],70,20],[[8,25],65,27],[[9,0],73,12],[[9,1],68,23],[[9,2],70,17],[[9,3],66,21],[[9,4],70,24],[[9,5],71,16],[[9,6],67,23],[[9,7],69,21],[[9,8],68,17],[[9,9],67,21],[[9,10],65,28],[[9,11],70,17],[[9,12],497,6],[[9,13],64,23],[[9,14],71,16],[[9,15],73,18],[[9,16],66,26],[[9,17],68,23],[[9,18],67,26],[[9,19],65,27],[[9,20],67,22],[[9,21],71,21],[[9,22],69,17],[[9,23],69,18],[[9,24],69,25],[[9,25],71,18],[[10,0],69,16],[[10,1],69,19],[[10,2],64,26],[[10,3],72,14],[[10,4],64,28],[[10,5],72,20],[[10,6],72,14],[[10,7],67,26],[[10,8],65,29],[[10,9],67,20],[[10,10],69,23],[[10,11],69,22],[[10,12],494,10],[[10,13],73,20],[[10,14],70,16],[[10,15],64,27],[[10,16],67,21],[[10,17],67,20],[[10,18],71,20],[[10,19],70,15],[[10,20],73,21],[[10,21],68,19],[[10,22],73,19],[[10,23],73,15],[[10,24],69,23],[[10,25],73,15],[[11,0],72,22],[[11,1],64,23],[[11,2],66,28],[[11,3],69,23],[[11,4],72,15],[[11,5],67,26],[[11,6],67,20],[[11,7],70,18],[[11,8],71,17],[[11,9],66,25],[[11,10],70,16],[[11,11],65,26],[[11,12],490,15],[[11,13],66,20],[[11,14],64,26],[[11,15],64,26],[[11,16],69,25],[[11,17],69,19],[[11,18],64,29],[[11,19],65,24],[[11,20],69,24],[[11,21],66,25],[[11,22],68,22],[[11,23],72,20],[[11,24],66,24],[[11,25],65,21],[[12,0],73,17],[[12,1],73,12],[[12,2],69,24],[[12,3],73,19],[[12,4],73,15],[[12,5],69,16],[[12,6],68,18],[[12,7],73,16],[[12,8],70,24],[[12,9],71,22],[[12,10],68,22],[[12,11],66,22],[[12,12],490,14],[[12,13],66,24],[[12,14],65,22],[[12,15],65,26],[[12,16],64,22],[[12,17],73,13],[[12,18],71,15],[[12,19],65,29],[[12,20],70,23],[[12,21],69,17],[[12,22],64,25],[[12,23],64,27],[[12,24],68,20],[[12,25],72,17],[[13,0],72,20],[[13,1],67,21],[[13,2],66,22],[[13,3],67,25],[[13,4],64,27],[[13,5],65,26],[[13,6],68,17],[[13,7],64,27],[[13,8],68,23],[[13,9],71,21],[[13,10],67,26],[[13,11],65,23],[[13,12],498,10],[[13,13],64,21],[[13,14],72,20],[[13,15],73,16],[[13,16],69,25],[[13,17],70,16],[[13,18],70,15],[[13,19],69,25],[[13,20],70,17],[[13,21],70,18],[[13,22],67,26],[[13,23],72,14],[[13,24],66,21],[[13,25],65,26],[[14,0],69,18],[[14,1],65,23],[[14,2],71,22],[[14,3],72,20],[[14,4],67,18],[[14,5],66,20],[[14,6],67,24],[[14,7],68,18],[[14,8],64,22],[[14,9],73,18],[[14,10],64,25],[[14,11],73,14],[[14,12],496,5],[[14,13],71,21],[[14,14],67,23],[[14,15],69,17],[[14,16],70,20],[[14,17],64,23],[[14,18],64,28],[[14,19],67,21],[[14,20],71,19],[[14,21],66,26],[[14,22],70,23],[[14,23],67,19],[[14,24],70,15],[[14,25],67,25],[[15,0],71,23],[[15,1],73,13],[[15,2],70,17],[[15,3],66,21],[[15,4],68,24],[[15,5],68,17],[[15,6],65,27],[[15,7],67,27],[[15,8],65,20],[[15,9],68,26],[[15,10],73,15],[[15,11],66,27],[[15,12],493,9],[[15,13],71,22],[[15,14],65,21],[[15,15],68,22],[[15,16],70,16],[[15,17],66,27],[[15,18],64,26],[[15,19],66,23],[[15,20],69,19],[[15,21],69,22],[[15,22],66,21],[[15,23],70,17],[[15,24],69,20],[[15,25],71,23],[[16,0],67,25],[[16,1],69,23],[[16,2],72,20],[[16,3],73,12],[[16,4],65,22],[[16,5],65,23],[[16,6],68,21],[[16,7],69,18],[[16,8],68,24],[[16,9],70,23],[[16,10],68,22],[[16,11],67,22],[[16,12],495,15],[[16,13],73,19],[[16,14],72,17],[[16,15],69,21],[[16,16],64,23],[[16,17],64,30],[[16,18],67,25],[[16,19],68,17],[[16,20],65,25],[[16,21],69,19],[[16,22],64,28],[[16,23],0,94],[[16,24],68,24],[[16,25],67,21],[[17,0],69,21],[[17,1],73,18],[[17,2],73,20],[[17,3],72,21],[[17,4],64,22],[[17,5],64,25],[[17,6],66,19],[[17,7],69,17],[[17,8],71,16],[[17,9],68,19],[[17,10],69,17],[[17,11],68,20],[[17,12],493,15],[[17,13],65,23],[[17,14],65,24],[[17,15],64,21],[[17,16],66,23],[[17,17],65,24],[[17,18],67,22],[[17,19],68,26],[[17,20],72,21],[[17,21],67,24],[[17,22],67,22],[[17,23],69,20],[[17,24],67,24],[[17,25],69,17],[[18,0],71,20],[[18,1],73,18],[[18,2],72,17],[[18,3],69,18],[[18,4],66,24],[[18,5],73,14],[[18,6],64,28],[[18,7],66,25],[[18,8],69,16],[[18,9],65,27],[[18,10],70,22],[[18,11],67,25],[[18,12],496,11],[[18,13],65,22],[[18,14],72,19],[[18,15],68,20],[[18,16],67,26],[[18,17],72,17],[[18,18],69,23],[[18,19],69,25],[[18,20],67,25],[[18,21],73,15],[[18,22],72,14],[[18,23],72,22],[[18,24],67,23],[[18,25],66,27],[[19,0],69,25],[[19,1],69,25],[[19,2],73,19],[[19,3],64,22],[[19,4],68,23],[[19,5],71,23],[[19,6],67,19],[[19,7],64,27],[[19,8],71,19],[[19,9],73,20],[[19,10],68,21],[[19,11],73,20],[[19,12],491,19],[[19,13],64,26],[[19,14],71,18],[[19,15],65,25],[[19,16],72,19],[[19,17],66,25],[[19,18],66,19],[[19,19],64,29],[[19,20],69,24],[[19,21],72,15],[[19,22],64,26],[[19,23],65,21],[[19,24],68,18],[[19,25],69,18],[[20,0],72,19],[[20,1],68,21],[[20,2],73,16],[[20,3],65,22],[[20,4],68,23],[[20,5],70,15],[[20,6],68,18],[[20,7],69,20],[[20,8],72,21],[[20,9],71,19],[[20,10],70,18],[[20,11],72,21],[[20,12],497,8],[[20,13],66,22],[[20,14],64,24],[[20,15],64,26],[[20,16],66,24],[[20,17],72,15],[[20,18],68,17],[[20,19],71,18],[[20,20],69,20],[[20,21],69,24],[[20,22],64,29],[[20,23],72,14],[[20,24],71,16],[[20,25],67,18],[[21,0],65,27],[[21,1],67,26],[[21,2],70,18],[[21,3],66,26],[[21,4],64,23],[[21,5],73,20],[[21,6],70,17],[[21,7],72,14],[[21,8],72,15],[[21,9],67,19],[[21,10],65,23],[[21,11],69,18],[[21,12],495,10],[[21,13],65,22],[[21,14],66,26],[[21,15],70,20],[[21,16],64,27],[[21,17],67,18],[[21,18],71,16],[[21,19],67,18],[[21,20],65,29],[[21,21],64,28],[[21,22],66,22],[[21,23],66,20],[[21,24],67,22],[[21,25],72,21],[[22,0],66,28],[[22,1],66,25],[[22,2],66,26],[[22,3],66,20],[[22,4],66,27],[[22,5],73,14],[[22,6],71,21],[[22,7],73,16],[[22,8],65,24],[[22,9],69,22],[[22,10],71,23],[[22,11],64,21],[[22,12],491,12],[[22,13],65,21],[[22,14],73,15],[[22,15],73,20],[[22,16],69,17],[[22,17],65,24],[[22,18],66,21],[[22,19],64,21],[[22,20],69,16],[[22,21],72,16],[[22,22],65,28],[[22,23],69,17],[[22,24],65,28],[[22,25],73,17],[[23,0],66,20],[[23,1],65,28],[[23,2],69,18],[[23,3],71,16],[[23,4],73,20],[[23,5],71,14],[[23,6],67,19],[[23,7],68,18],[[23,8],67,25],[[23,9],72,19],[[23,10],71,18],[[23,11],64,27],[[23,12],496,10],[[23,13],71,19],[[23,14],70,23],[[23,15],72,18],[[23,16],68,20],[[23,17],68,19],[[23,18],72,16],[[23,19],66,28],[[23,20],72,22],[[23,21],69,18],[[23,22],70,20],[[23,23],73,19],[[23,24],70,18],[[23,25],69,20],[[24,0],65,23],[[24,1],67,23],[[24,2],64,29],[[24,3],65,27],[[24,4],64,24],[[24,5],65,26],[[24,6],68,24],[[24,7],65,20],[[24,8],64,30],[[24,9],68,19],[[24,10],70,15],[[24,11],65,24],[[24,12],492,18],[[24,13],66,25],[[24,14],66,24],[[24,15],73,20],[[24,16],64,26],[[24,17],64,24],[[24,18],69,25],[[24,19],73,18],[[24,20],72,20],[[24,21],72,17],[[24,22],67,26],[[24,23],73,15],[[24,24],72,22],[[24,25],69,20],[[25,0],68,17],[[25,1],72,22],[[25,2],70,23],[[25,3],72,14],[[25,4],64,26],[[25,5],67,26],[[25,6],72,22],[[25,7],64,22],[[25,8],70,23],[[25,9],65,20],[[25,10],66,21],[[25,11],73,18],[[25,12],493,16],[[25,13],68,23],[[25,14],68,17],[[25,15],64,25],[[25,16],69,16],[[25,17],72,13],[[25,18],71,14],[[25,19],70,21],[[25,20],70,23],[[25,21],73,14],[[25,22],67,27],[[25,23],70,17],[[25,24],69,19],[[25,25],72,13],[[26,0],72,13],[[26,1],65,21],[[26,2],68,24],[[26,3],69,16],[[26,4],70,18],[[26,5],72,18],[[26,6],70,23],[[26,7],66,25],[[26,8],69,20],[[26,9],71,20],[[26,10],73,21],[[26,11],65,24],[[26,12],493,10],[[26,13],69,19],[[26,14],68,26],[[26,15],64,27],[[26,16],69,19],[[26,17],64,30],[[26,18],67,26],[[26,19],73,19],[[26,20],66,26],[[26,21],65,25],[[26,22],71,20],[[26,23],64,21],[[26,24],72,16],[[26,25],71,17],[[27,0],68,19],[[27,1],65,25],[[27,2],67,19],[[27,3],71,18],[[27,4],70,15],[[27,5],71,23],[[27,6],69,19],[[27,7],69,21],[[27,8],65,26],[[27,9],66,28],[[27,10],67,23],[[27,11],68,26],[[27,12],495,10],[[27,13],67,22],[[27,14],73,18],[[27,15],69,18],[[27,16],66,24],[[27,17],68,18],[[27,18],72,17],[[27,19],64,29],[[27,20],65,29],[[27,21],70,15],[[27,22],70,22],[[27,23],70,22],[[27,24],65,29],[[27,25],66,28],[[28,0],70,18],[[28,1],73,21],[[28,2],72,14],[[28,3],73,16],[[28,4],67,20],[[28,5],71,16],[[28,6],69,25],[[28,7],64,22],[[28,8],72,19],[[28,9],68,17],[[28,10],64,22],[[28,11],67,19],[[28,12],493,12],[[28,13],73,12],[[28,14],67,23],[[28,15],71,19],[[28,16],65,28],[[28,17],68,23],[[28,18],73,14],[[28,19],72,16],[[28,20],66,19],[[28,21],68,21],[[28,22],66,25],[[28,23],64,27],[[28,24],70,17],[[28,25],67,24],[[29,0],72,19],[[29,1],72,18],[[29,2],72,18],[[29,3],68,24],[[29,4],67,21],[[29,5],64,30],[[29,6],68,17],[[29,7],72,19],[[29,8],65,20],[[29,9],64,26],[[29,10],71,16],[[29,11],64,30],[[29,12],491,13],[[29,13],72,18],[[29,14],67,25],[[29,15],69,24],[[29,16],71,17],[[29,17],71,14],[[29,18],67,24],[[29,19],66,22],[[29,20],64,23],[[29,21],64,26],[[29,22],67,25],[[29,23],67,18],[[29,24],66,23],[[29,25],67,25],[[30,0],65,28],[[30,1],66,22],[[30,2],69,25],[[30,3],65,23],[[30,4],68,24],[[30,5],67,25],[[30,6],68,22],[[30,7],70,15],[[30,8],69,24],[[30,9],67,27],[[30,10],65,24],[[30,11],66,28],[[30,12],497,9],[[30,13],70,24],[[30,14],72,20],[[30,15],69,23],[[30,16],71,21],[[30,17],70,19],[[30,18],65,25],[[30,19],68,21],[[30,20],72,19],[[30,21],69,17],[[30,22],72,18],[[30,23],73,14],[[30,24],68,20],[[30,25],67,25],[[31,0],68,20],[[31,1],65,20],[[31,2],68,21],[[31,3],72,21],[[31,4],65,29],[[31,5],71,22],[[31,6],73,15],[[31,7],70,23],[[31,8],65,28],[[31,9],67,27],[[31,10],64,24],[[31,11],72,22],[[31,12],493,9],[[31,13],70,22],[[31,14],64,22],[[31,15],64,30],[[31,16],73,20],[[31,17],71,20],[[31,18],71,20],[[31,19],71,18],[[31,20],72,17],[[31,21],71,21],[[31,22],67,20],[[31,23],72,21],[[31,24],73,13],[[31,25],70,23],[[32,0],65,29],[[32,1],65,29],[[32,2],69,25],[[32,3],73,20],[[32,4],65,23],[[32,5],72,15],[[32,6],73,16],[[32,7],66,23],[[32,8],73,12],[[32,9],73,19],[[32,10],70,21],[[32,11],66,28],[[32,12],497,10],[[32,13],64,28],[[32,14],70,19],[[32,15],69,19],[[32,16],72,18],[[32,17],66,25],[[32,18],73,15],[[32,19],70,15],[[32,20],73,14],[[32,21],69,20],[[32,22],69,20],[[32,23],70,20],[[32,24],71,20],[[32,25],69,24],[[33,0],68,24],[[33,1],68,18],[[33,2],68,19],[[33,3],73,13],[[33,4],70,15],[[33,5],67,27],[[33,6],73,17],[[33,7],69,21],[[33,8],69,16],[[33,9],72,13],[[33,10],67,25],[[33,11],68,26],[[33,12],494,13],[[33,13],65,22],[[33,14],68,22],[[33,15],69,23],[[33,16],66,27],[[33,17],73,15],[[33,18],64,27],[[33,19],71,16],[[33,20],70,22],[[33,21],72,18],[[33,22],64,26],[[33,23],71,17],[[33,24],65,21],[[33,25],68,24],[[34,0],70,20],[[34,1],70,22],[[34,2],72,14],[[34,3],73,19],[[34,4],71,21],[[34,5],70,16],[[34,6],64,26],[[34,7],72,19],[[34,8],64,25],[[34,9],68,19],[[34,10],70,19],[[34,11],69,17],[[34,12],490,12],[[34,13],66,21],[[34,14],71,21],[[34,15],69,24],[[34,16],73,17],[[34,17],65,25],[[34,18],65,21],[[34,19],67,26],[[34,20],67,26],[[34,21],68,24],[[34,22],71,17],[[34,23],72,20],[[34,24],72,22],[[34,25],72,17],[[35,0],64,22],[[35,1],67,23],[[35,2],65,24],[[35,3],72,21],[[35,4],67,23],[[35,5],73,21],[[35,6],69,22],[[35,7],71,19],[[35,8],67,18],[[35,9],65,20],[[35,10],70,18],[[35,11],71,21],[[35,12],495,6],[[35,13],71,18],[[35,14],65,22],[[35,15],67,21],[[35,16],73,16],[[35,17],73,13],[[35,18],67,27],[[35,19],68,24],[[35,20],73,13],[[35,21],65,27],[[35,22],72,18],[[35,23],65,24],[[35,24],66,21],[[35,25],73,19],[[36,0],65,29],[[36,1],73,19],[[36,2],72,18],[[36,3],67,21],[[36,4],70,15],[[36,5],64,28],[[36,6],66,28],[[36,7],72,15],[[36,8],70,20],[[36,9],73,12],[[36,10],67,19],[[36,11],68,18],[[36,12],498,7],[[36,13],64,28],[[36,14],68,23],[[36,15],67,18],[[36,16],70,19],[[36,17],69,20],[[36,18],70,24],[[36,19],72,13],[[36,20],65,27],[[36,21],64,25],[[36,22],73,20],[[36,23],67,19],[[36,24],66,25],[[36,25],70,19],[[37,0],70,21],[[37,1],66,19],[[37,2],71,14],[[37,3],72,18],[[37,4],66,27],[[37,5],70,19],[[37,6],65,23],[[37,7],64,25],[[37,8],65,29],[[37,9],67,21],[[37,10],69,25],[[37,11],66,25],[[37,12],491,15],[[37,13],68,17],[[37,14],73,21],[[37,15],65,22],[[37,16],73,12],[[37,17],67,25],[[37,18],69,22],[[37,19],67,20],[[37,20],67,19],[[37,21],67,20],[[37,22],70,18],[[37,23],73,14],[[37,24],66,28],[[37,25],73,19]];

var d1 = new Date();

var viable = 0;

//while solving part 1, find these for part 2
var maxX = 0;
var maxY = 0;
var freeSpace = 0;

for(var i = 0; i < input.length; i++) {
  for(var j = i+1; j < input.length; j++) {
    var loc1 = input[i];
    var loc2 = input[j];
    if(loc1[1] > 0 && loc1[1] < loc2[2]) {
      viable++;
      freeSpace = loc2[2]; //only one viable loc - save its availability
    }
    if(loc2[1] > 0 && loc2[1] < loc1[2]) {
      viable++;
    }

    if(loc1[0][0] > maxX) { maxX = loc1[0][0]; }
    if(loc1[0][1] > maxY) { maxY = loc1[0][1]; }
  }
}
var d2 = new Date();
console.log('\n'+(d2.getTime() - d1.getTime())/1000 + 's');
console.log(viable + ' viable pairs found');

//turn list into a 2d array
var FREE = 0;
var FIXED = 1;
var STANDARD = 2;
var GOAL = 3;
var cellChars = ['_','#','.','G'];
var graph = [];
for(var i = 0; i <= maxX; i++) {
  graph[i] = [];
}
var freeLoc;
for(var i = 0; i < input.length; i++){
  var x = input[i][0][0];
  var y = input[i][0][1];
  if(input[i][2] >= freeSpace) {
    //it has a ton available
    graph[x][y] = FREE;
  } else if(input[i][1] >= freeSpace) {
    //it has too much stuff to move
    graph[x][y] = FIXED;
  } else if (x === maxX && y === 0) {
    graph[x][y] = GOAL;
  } else {
    graph[x][y] = STANDARD;
  }
}

var printGraph = function(graph) {
  console.log('\n');
  for(var i = 0; i <= maxY; i++) {
    var line = '';
    for(var j = 0; j <= maxX; j++) {
      if(i === 0 && j === 0) {
        line += 'S';
      } else {
        line += cellChars[graph[j][i]];
      }
    } 
    console.log(line);
  }
}

printGraph(graph);
//output from printing:
// S....................................G
// ......................................
// ......................................
// ......................................
// ......................................
// ......................................
// ......................................
// ......................................
// ......................................
// ......................................
// ......................................
// ......................................
// ......################################
// ......................................
// ......................................
// ......................................
// ......................................
// ......................................
// ......................................
// ......................................
// ......................................
// ......................................
// ......................................
// ................_.....................
// ......................................
// ......................................

//now, some counting:

//10 steps to get the _ to right below the # line
//11 steps to go left just past the #
//2 steps to go above the #
//31 steps to go to the next-to-last column
//11 steps to get next the G, eg: ...._G
//1 step to swap them into ....G_
//total: this is 66 steps

//note: it's 4 steps to go from G_ to _G, and one to go from _G to G_
//so in total, to get from .G_ to G_. is 5

//there are 36 spots between the G and the S now, so in total, another 180 steps
//so in all, 246 steps to get the goal data to the starting point!