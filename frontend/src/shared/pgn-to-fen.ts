/* eslint-disable */

import cloneDeep from 'lodash/cloneDeep';
import clone from 'lodash/clone';
import * as CONSTANTS from './pgn-to-fen-conts';

class pgnToFen {
  Board: number[][];
  CanPass: number;
  Castling: number[][];
  currentMove: number;
  CurVar: number;
  EnPass: number;
  FenString: string;
  HalfMove: number[];
  HistCommand: string[];
  HistMove: string[];
  HistPiece: any[];
  HistPosX: any[];
  HistPosY: any[];
  HistType: any[];
  MaxMove: number;
  MoveArray: string[];
  MoveCount: number;
  MoveType: number;
  NewCommands: string[];
  PieceCode: number[];
  PieceMoves: number[][];
  PieceName: string;
  PiecePosX: number[][];
  PiecePosY: number[][];
  PieceType: number[][];
  RecordCount: number;
  ShortPgnMoveText: string[][];
  StartMove: number;
  key: string;
  constructor(pgn: string, key: string) {
    this.key = key;
    this.Board = cloneDeep(CONSTANTS.Board);
    this.CanPass = -1;
    this.Castling =  cloneDeep(CONSTANTS.Castling);
    this.currentMove = 0;
    this.CurVar = 0;
    this.CurVar = clone(CONSTANTS.CurVar);
    this.EnPass = clone(CONSTANTS.EnPass);
    this.FenString = clone(CONSTANTS.FenString);
    this.HalfMove = cloneDeep(CONSTANTS.HalfMove);
    this.HistCommand = cloneDeep(new Array(CONSTANTS.MaxMove + 1));
    this.HistMove = cloneDeep(new Array(CONSTANTS.MaxMove));
    this.HistPiece = cloneDeep(CONSTANTS.HistPiece);
    this.HistPosX = cloneDeep(CONSTANTS.HistPosX);
    this.HistPosY = cloneDeep(CONSTANTS.HistPosY);
    this.HistType = cloneDeep(CONSTANTS.HistType);
    this.MaxMove = cloneDeep(CONSTANTS.MaxMove);
    this.MoveArray = cloneDeep(CONSTANTS.MoveArray);
    this.MoveCount = 0;
    this.MoveType = 0;
    this.NewCommands = cloneDeep(CONSTANTS.NewCommands);
    this.PieceCode = cloneDeep(CONSTANTS.PieceCode);
    this.PieceMoves = cloneDeep(CONSTANTS.PieceMoves);
    this.PieceName = cloneDeep(CONSTANTS.PieceName);
    this.PiecePosX = cloneDeep(CONSTANTS.PiecePosX);
    this.PiecePosY = cloneDeep(CONSTANTS.PiecePosY);
    this.PieceType = cloneDeep(CONSTANTS.PieceType);
    this.RecordCount = 0;
    this.ShortPgnMoveText = cloneDeep([[pgn], [], []]);
    this.StartMove = 0;
  }

  private BuildFen(): string {
    let ii;
    let jj;
    let ee;
    let ss = '';
    for (jj = 7; jj >= 0; jj--) {
      ee = 0;
      for (ii = 0; ii < 8; ii++) {
        if (this.Board[ii][jj] == 0) ee++;
        else {
          if (ee > 0) {
            ss = ss + '' + ee;
            ee = 0;
          }
          if (this.Board[ii][jj] > 0)
            ss =
              ss + this.PieceName.toUpperCase().charAt(this.Board[ii][jj] - 1);
          else
            ss =
              ss + this.PieceName.toLowerCase().charAt(-this.Board[ii][jj] - 1);
        }
      }
      if (ee > 0) ss = ss + '' + ee;
      if (jj > 0) ss = ss + '/';
    }
    if (this.MoveType == 0) ss = ss + ' w';
    else ss = ss + ' b';
    ee = '';
    if (this.Castling[0][0] > 0 && this.PieceMoves[0][0] == 0) {
      for (ii = 0; ii < 16; ii++) {
        if (
          this.PieceType[0][ii] == 2 &&
          this.PiecePosX[0][ii] == 7 &&
          this.PiecePosY[0][ii] == 0 &&
          this.PieceMoves[0][ii] == 0
        )
          ee = ee + this.PieceName.toUpperCase().charAt(0);
      }
    }
    if (this.Castling[0][1] > 0 && this.PieceMoves[0][0] == 0) {
      for (ii = 0; ii < 16; ii++) {
        if (
          this.PieceType[0][ii] == 2 &&
          this.PiecePosX[0][ii] == 0 &&
          this.PiecePosY[0][ii] == 0 &&
          this.PieceMoves[0][ii] == 0
        )
          ee = ee + this.PieceName.toUpperCase().charAt(1);
      }
    }
    if (this.Castling[1][0] > 0 && this.PieceMoves[1][0] == 0) {
      for (ii = 0; ii < 16; ii++) {
        if (
          this.PieceType[1][ii] == 2 &&
          this.PiecePosX[1][ii] == 7 &&
          this.PiecePosY[1][ii] == 7 &&
          this.PieceMoves[1][ii] == 0
        )
          ee = ee + this.PieceName.toLowerCase().charAt(0);
      }
    }
    if (this.Castling[1][1] > 0 && this.PieceMoves[1][0] == 0) {
      for (ii = 0; ii < 16; ii++) {
        if (
          this.PieceType[1][ii] == 2 &&
          this.PiecePosX[1][ii] == 0 &&
          this.PiecePosY[1][ii] == 7 &&
          this.PieceMoves[1][ii] == 0
        )
          ee = ee + this.PieceName.toLowerCase().charAt(1);
      }
    }
    if (ee == '') ss = ss + ' -';
    else ss = ss + ' ' + ee;
    if (this.MoveCount > this.StartMove) {
      this.CanPass = -1;
      ii = this.HistPiece[0][this.MoveCount - this.StartMove - 1];
      if (
        this.HistType[0][this.MoveCount - this.StartMove - 1] == 5 &&
        Math.abs(
          this.HistPosY[0][this.MoveCount - this.StartMove - 1] -
            this.PiecePosY[1 - this.MoveType][ii]
        ) == 2
      )
        this.CanPass = this.PiecePosX[1 - this.MoveType][ii];
    } else this.CanPass = this.EnPass;
    if (this.CanPass >= 0) {
      ss = ss + ' ' + String.fromCharCode(97 + this.CanPass);
      if (this.MoveType == 0) ss = ss + '6';
      else ss = ss + '3';
    } else ss = ss + ' -';
    ss = ss + ' ' + this.HalfMove[this.MoveCount - this.StartMove];
    ss = ss + ' ' + Math.floor((this.MoveCount + 2) / 2);
    return ss;
  }

  private Uncomment(ss: string) {
    let ii;
    let jj;
    let llist = ss.split('{');
    let ll = llist.length;
    let uu = llist[0];
    let tt;
    let kk;
    for (ii = 1; ii < ll; ii++) {
      tt = llist[ii];
      jj = tt.indexOf('}') + 1;
      if (jj > 0) uu += tt.substring(jj);
    }
    llist = uu.split('$');
    ll = llist.length;
    uu = llist[0];
    for (ii = 1; ii < ll; ii++) {
      tt = llist[ii];
      kk = tt.length;
      for (jj = 0; jj < kk; jj++) {
        if (isNaN(parseInt(tt.charAt(jj)))) {
          //if (tt.charAt(jj)==" ")
          uu += tt.substring(jj + 1);
          jj = kk;
        }
      }
    }
    return uu;
  }

  private MoveBackward(nn: number) {
    var ii, jj, cc;
    for (jj = 0; jj < nn && this.MoveCount > this.StartMove; jj++) {
      if (this.RecordCount > 0) this.RecordCount--;
      this.MoveCount--;
      this.MoveType = 1 - this.MoveType;
      cc = this.MoveCount - this.StartMove;
      ii = this.HistPiece[1][cc];
      if (0 <= ii && ii < 16) {
        //we must do this here because of Chess960 castling
        this.Board[this.PiecePosX[this.MoveType][ii]][
          this.PiecePosY[this.MoveType][ii]
        ] = 0;
        this.Board[this.HistPosX[1][cc]][this.HistPosY[1][cc]] =
          (this.HistType[1][cc] + 1) * (1 - 2 * this.MoveType);
      }
      ii = this.HistPiece[0][cc];
      this.Board[this.PiecePosX[this.MoveType][ii]][
        this.PiecePosY[this.MoveType][ii]
      ] = 0;
      this.Board[this.HistPosX[0][cc]][this.HistPosY[0][cc]] =
        (this.HistType[0][cc] + 1) * (1 - 2 * this.MoveType);
      this.PieceType[this.MoveType][ii] = this.HistType[0][cc];
      this.PiecePosX[this.MoveType][ii] = this.HistPosX[0][cc];
      this.PiecePosY[this.MoveType][ii] = this.HistPosY[0][cc];
      this.PieceMoves[this.MoveType][ii]--;
      ii = this.HistPiece[1][cc];
      if (0 <= ii && ii < 16) {
        this.PieceType[this.MoveType][ii] = this.HistType[1][cc];
        this.PiecePosX[this.MoveType][ii] = this.HistPosX[1][cc];
        this.PiecePosY[this.MoveType][ii] = this.HistPosY[1][cc];
        this.PieceMoves[this.MoveType][ii]--;
      }
      ii -= 16;
      if (0 <= ii) {
        this.Board[this.HistPosX[1][cc]][this.HistPosY[1][cc]] =
          (this.HistType[1][cc] + 1) * (2 * this.MoveType - 1);
        this.PieceType[1 - this.MoveType][ii] = this.HistType[1][cc];
        this.PiecePosX[1 - this.MoveType][ii] = this.HistPosX[1][cc];
        this.PiecePosY[1 - this.MoveType][ii] = this.HistPosY[1][cc];
        this.PieceMoves[1 - this.MoveType][ii]--;
      }
      // if (this.CurVar != 0) {
      //   if (this.MoveCount === this.ShortPgnMoveText[2][this.CurVar]) {
      //     this.CurVar = this.ShortPgnMoveText[1][this.CurVar];
      //   }
      // }
    }
    if (this.HistCommand[this.MoveCount - this.StartMove])
      this.NewCommands = this.HistCommand[
        this.MoveCount - this.StartMove
      ].split('|');
  }
  private MoveForward(nn: number) {
    var ii,
      ffst = 0,
      llst,
      ssearch,
      ssub,
      ffull,
      mmove0 = '',
      mmove1 = '';
    ffull = this.Uncomment(this.ShortPgnMoveText[0][this.CurVar]);
    for (ii = 0; ii < nn && ffst >= 0 && this.MoveCount < this.MaxMove; ii++) {
      ssearch = Math.floor(this.MoveCount / 2 + 2) + '.';
      llst = ffull.indexOf(ssearch);
      ssearch = Math.floor(this.MoveCount / 2 + 1) + '.';
      ffst = ffull.indexOf(ssearch);
      if (ffst >= 0) {
        ffst += ssearch.length;
        if (llst < 0) ssub = ffull.substring(ffst);
        else ssub = ffull.substring(ffst, llst);
        mmove0 = this.GetMove(ssub, this.MoveType);
        if (mmove0 != '') {
          if (this.ParseMove(mmove0, true) > 0) {
            mmove1 = mmove0;
            if (this.MoveType == 0)
              this.HistMove[this.MoveCount - this.StartMove] =
                Math.floor((this.MoveCount + 2) / 2) + '.' + mmove1;
            else
              this.HistMove[this.MoveCount - this.StartMove] =
                Math.floor((this.MoveCount + 2) / 2) + '. ... ' + mmove1;
            this.HistCommand[
              this.MoveCount - this.StartMove + 1
            ] = this.NewCommands.join('|');
            this.MoveCount++;
            this.MoveType = 1 - this.MoveType;
          } else {
            if (this.MoveType == 1) {
              ssub = Math.floor(this.MoveCount / 2 + 1);
              ssearch = ssub + '....';
              ffst = ffull.indexOf(ssearch);
              if (ffst < 0) {
                ssearch = ssub + '. ...';
                ffst = ffull.indexOf(ssearch);
              }
              if (ffst < 0) {
                ssearch = ssub + '. ..';
                ffst = ffull.indexOf(ssearch);
              }
              if (ffst < 0) {
                ssearch = ssub + ' ...';
                ffst = ffull.indexOf(ssearch);
              }
              if (ffst < 0) {
                ssearch = ssub + '...';
                ffst = ffull.indexOf(ssearch);
              }
              if (ffst < 0) {
                ssearch = ssub + ' ..';
                ffst = ffull.indexOf(ssearch);
              }
              if (ffst >= 0) {
                ffst += ssearch.length;
                if (llst < 0) ssub = ffull.substring(ffst);
                else ssub = ffull.substring(ffst, llst);
                mmove0 = this.GetMove(ssub, 0);
                if (mmove0 != '') {
                  if (this.ParseMove(mmove0, true) > 0) {
                    mmove1 = mmove0;
                    this.HistMove[this.MoveCount - this.StartMove] =
                      Math.floor((this.MoveCount + 2) / 2) + '. ... ' + mmove1;
                    this.HistCommand[
                      this.MoveCount - this.StartMove + 1
                    ] = this.NewCommands.join('|');
                    this.MoveCount++;
                    this.MoveType = 1 - this.MoveType;
                  } else {
                    ffst = -1;
                    //alert(mmove0+" is not a valid move.");
                  }
                }
              }
            } else {
              ffst = -1;
              //alert(mmove0+" is not a valid move.");
            }
          }
        } else ffst = -1;
      }
    }
  }

  private GetMove(tt: string, nn: number) {
    let ii = 0;
    let jj = 0;
    let mm = '';
    let ll = -1;
    let cc;
    let ss = tt;
    while (ss.indexOf('<br />') > 0) {
      ss = ss.replace('<br />', '');
    }
    const kk = ss.length;
    while (ii < kk) {
      cc = ss.charCodeAt(ii);
      if (cc <= 32) {
        if (ll + 1 != ii) jj++;
        ll = ii;
      } else {
        if (jj == nn) {
          if (cc == 46 && !isNaN(mm as any)) {
            mm = '';
            ll = ii;
          } else mm += ss.charAt(ii);
        }
      }
      ii++;
    }
    if (nn == 1 && mm == '' && ss.charAt(0) == '.') {
      ii = 0;
      while (ii < kk) {
        cc = ss.charAt(ii);
        if (cc != '.' && cc != ' ') mm += cc;
        ii++;
      }
    }
    if (mm != '') {
      ii = mm.indexOf('<');
      jj = mm.indexOf('>');
      ll = 0;
      while (ii >= 0 && jj >= 0 && ii < jj) {
        mm = mm.substr(0, ii) + mm.substr(jj + 1);
        ii = mm.indexOf('<');
        jj = mm.indexOf('>');
      }
    }
    return mm;
  }

  private IsOnBoard(ii: number, jj: number) {
    if (ii < 0) return false;
    if (ii > 7) return false;
    if (jj < 0) return false;
    if (jj > 7) return false;
    return true;
  }

  private IsCheck(xx: number, yy: number, tt: number) {
    var ii0 = xx,
      jj0 = yy,
      ddi,
      ddj,
      bb;
    for (ddi = -2; ddi <= 2; ddi += 4) {
      for (ddj = -1; ddj <= 1; ddj += 2) {
        if (this.IsOnBoard(ii0 + ddi, jj0 + ddj)) {
          if (this.Board[ii0 + ddi][jj0 + ddj] == 10 * tt - 5) return 1;
        }
      }
    }
    for (ddi = -1; ddi <= 1; ddi += 2) {
      for (ddj = -2; ddj <= 2; ddj += 4) {
        if (this.IsOnBoard(ii0 + ddi, jj0 + ddj)) {
          if (this.Board[ii0 + ddi][jj0 + ddj] == 10 * tt - 5) return 1;
        }
      }
    }
    for (ddi = -1; ddi <= 1; ddi += 2) {
      ddj = 1 - 2 * tt;
      {
        if (this.IsOnBoard(ii0 + ddi, jj0 + ddj)) {
          if (this.Board[ii0 + ddi][jj0 + ddj] == 12 * tt - 6) return 1;
        }
      }
    }
    if (
      Math.abs(this.PiecePosX[1 - tt][0] - xx) < 2 &&
      Math.abs(this.PiecePosY[1 - tt][0] - yy) < 2
    )
      return 1;
    for (ddi = -1; ddi <= 1; ddi += 1) {
      for (ddj = -1; ddj <= 1; ddj += 1) {
        if (ddi != 0 || ddj != 0) {
          ii0 = xx + ddi;
          jj0 = yy + ddj;
          bb = 0;
          while (this.IsOnBoard(ii0, jj0) && bb == 0) {
            bb = this.Board[ii0][jj0];
            if (bb == 0) {
              ii0 += ddi;
              jj0 += ddj;
            } else {
              if (bb == 4 * tt - 2) return 1;
              if (bb == 6 * tt - 3 && (ddi == 0 || ddj == 0)) return 1;
              if (bb == 8 * tt - 4 && ddi != 0 && ddj != 0) return 1;
            }
          }
        }
      }
    }
    return 0;
  }

  private CanCastleLong() {
    if (this.Castling[this.MoveType][1] == 0) return -1;
    if (this.PieceMoves[this.MoveType][0] > 0) return -1;
    var jj = 0;
    while (jj < 16) {
      if (
        this.PiecePosX[this.MoveType][jj] < this.PiecePosX[this.MoveType][0] &&
        this.PiecePosY[this.MoveType][jj] == this.MoveType * 7 &&
        this.PieceType[this.MoveType][jj] == 2 &&
        this.PieceMoves[this.MoveType][jj] == 0
      )
        jj += 100;
      else jj++;
    }
    if (jj == 16) return -1;
    jj -= 100;
    this.Board[this.PiecePosX[this.MoveType][0]][this.MoveType * 7] = 0;
    this.Board[this.PiecePosX[this.MoveType][jj]][this.MoveType * 7] = 0;
    var ff = this.PiecePosX[this.MoveType][jj];
    if (ff > 2) ff = 2;
    while (ff < this.PiecePosX[this.MoveType][0] || ff <= 3) {
      if (this.Board[ff][this.MoveType * 7] != 0) {
        this.Board[this.PiecePosX[this.MoveType][0]][this.MoveType * 7] =
          1 - 2 * this.MoveType;
        this.Board[this.PiecePosX[this.MoveType][jj]][this.MoveType * 7] =
          (1 - 2 * this.MoveType) * 3;
        return -1;
      }
      ff++;
    }
    this.Board[this.PiecePosX[this.MoveType][0]][this.MoveType * 7] =
      1 - 2 * this.MoveType;
    this.Board[this.PiecePosX[this.MoveType][jj]][this.MoveType * 7] =
      (1 - 2 * this.MoveType) * 3;
    return jj;
  }

  private CanCastleShort() {
    if (this.Castling[this.MoveType][0] == 0) return -1;
    if (this.PieceMoves[this.MoveType][0] > 0) return -1;
    var jj = 0;
    while (jj < 16) {
      if (
        this.PiecePosX[this.MoveType][jj] > this.PiecePosX[this.MoveType][0] &&
        this.PiecePosY[this.MoveType][jj] == this.MoveType * 7 &&
        this.PieceType[this.MoveType][jj] == 2 &&
        this.PieceMoves[this.MoveType][jj] == 0
      )
        jj += 100;
      else jj++;
    }
    if (jj == 16) return -1;
    jj -= 100;
    this.Board[this.PiecePosX[this.MoveType][0]][this.MoveType * 7] = 0;
    this.Board[this.PiecePosX[this.MoveType][jj]][this.MoveType * 7] = 0;
    var ff = this.PiecePosX[this.MoveType][jj];
    if (ff < 6) ff = 6;
    while (ff > this.PiecePosX[this.MoveType][0] || ff >= 5) {
      if (this.Board[ff][this.MoveType * 7] != 0) {
        this.Board[this.PiecePosX[this.MoveType][0]][this.MoveType * 7] =
          1 - 2 * this.MoveType;
        this.Board[this.PiecePosX[this.MoveType][jj]][this.MoveType * 7] =
          (1 - 2 * this.MoveType) * 3;
        return -1;
      }
      ff--;
    }
    this.Board[this.PiecePosX[this.MoveType][0]][this.MoveType * 7] =
      1 - 2 * this.MoveType;
    this.Board[this.PiecePosX[this.MoveType][jj]][this.MoveType * 7] =
      (1 - 2 * this.MoveType) * 3;
    return jj;
  }

  private sign(nn: number) {
    if (nn > 0) return 1;
    if (nn < 0) return -1;
    return 0;
  }

  private EvalMove(
    ii: number,
    ttype0: number,
    xx0: number,
    yy0: number,
    ttype1: number,
    xx1: number,
    yy1: number,
    ccapt: number,
    sstore: boolean
  ) {
    var ddx,
      ddy,
      xx,
      yy,
      jj = -1,
      ttype3 = -1,
      xx3 = -1,
      yy3 = -1;
    if (ttype0 == 6) {
      //O-O-O with Chess960 rules
      jj = this.CanCastleLong();
      if (jj < 0) return false;
      if (
        this.StoreMove(
          0,
          0,
          2,
          this.MoveType * 7,
          jj,
          2,
          3,
          this.MoveType * 7,
          sstore
        )
      )
        return true;
      else return false;
    }
    if (ttype0 == 7) {
      //O-O with Chess960 rules
      jj = this.CanCastleShort();
      if (jj < 0) return false;
      if (
        this.StoreMove(
          0,
          0,
          6,
          this.MoveType * 7,
          jj,
          2,
          5,
          this.MoveType * 7,
          sstore
        )
      )
        return true;
      return false;
    }
    if (ttype0 == 8) {
      // --- NullMove
      if (
        this.StoreMove(
          0,
          0,
          this.PiecePosX[this.MoveType][0],
          this.PiecePosY[this.MoveType][0],
          -1,
          -1,
          -1,
          -1,
          sstore
        )
      )
        return true;
      return false;
    }
    if (
      this.PiecePosX[this.MoveType][ii] == xx1 &&
      this.PiecePosY[this.MoveType][ii] == yy1
    )
      return false;
    if (ccapt == 0 && this.Board[xx1][yy1] != 0) return false;
    if (ccapt > 0 && this.sign(this.Board[xx1][yy1]) != 2 * this.MoveType - 1) {
      if (ttype0 != 5 || this.CanPass != xx1 || yy1 != 5 - 3 * this.MoveType)
        return false;
    }
    if (xx0 >= 0 && xx0 != this.PiecePosX[this.MoveType][ii]) return false;
    if (yy0 >= 0 && yy0 != this.PiecePosY[this.MoveType][ii]) return false;
    if (ttype0 == 0) {
      //if ((xx0>=0)||(yy0>=0)) return(false); //because of Smith Notation
      if (Math.abs(this.PiecePosX[this.MoveType][ii] - xx1) > 1) return false;
      if (Math.abs(this.PiecePosY[this.MoveType][ii] - yy1) > 1) return false;
    }
    if (ttype0 == 1) {
      if (
        Math.abs(this.PiecePosX[this.MoveType][ii] - xx1) !=
          Math.abs(this.PiecePosY[this.MoveType][ii] - yy1) &&
        (this.PiecePosX[this.MoveType][ii] - xx1) *
          (this.PiecePosY[this.MoveType][ii] - yy1) !=
          0
      )
        return false;
    }
    if (ttype0 == 2) {
      if (
        (this.PiecePosX[this.MoveType][ii] - xx1) *
          (this.PiecePosY[this.MoveType][ii] - yy1) !=
        0
      )
        return false;
    }
    if (ttype0 == 3) {
      if (
        Math.abs(this.PiecePosX[this.MoveType][ii] - xx1) !=
        Math.abs(this.PiecePosY[this.MoveType][ii] - yy1)
      )
        return false;
    }
    if (ttype0 == 4) {
      if (
        Math.abs(this.PiecePosX[this.MoveType][ii] - xx1) *
          Math.abs(this.PiecePosY[this.MoveType][ii] - yy1) !=
        2
      )
        return false;
    }
    if (ttype0 == 1 || ttype0 == 2 || ttype0 == 3) {
      ddx = this.sign(xx1 - this.PiecePosX[this.MoveType][ii]);
      ddy = this.sign(yy1 - this.PiecePosY[this.MoveType][ii]);
      xx = this.PiecePosX[this.MoveType][ii] + ddx;
      yy = this.PiecePosY[this.MoveType][ii] + ddy;
      while (xx != xx1 || yy != yy1) {
        if (this.Board[xx][yy] != 0) return false;
        xx += ddx;
        yy += ddy;
      }
    }
    if (ttype0 == 5) {
      if (Math.abs(this.PiecePosX[this.MoveType][ii] - xx1) != ccapt)
        return false;
      if (yy1 == 7 * (1 - this.MoveType) && ttype0 == ttype1) return false;
      if (ccapt == 0) {
        if (this.PiecePosY[this.MoveType][ii] - yy1 == 4 * this.MoveType - 2) {
          if (this.PiecePosY[this.MoveType][ii] != 1 + 5 * this.MoveType)
            return false;
          if (this.Board[xx1][yy1 + 2 * this.MoveType - 1] != 0) return false;
        } else {
          if (this.PiecePosY[this.MoveType][ii] - yy1 != 2 * this.MoveType - 1)
            return false;
        }
      } else {
        if (this.PiecePosY[this.MoveType][ii] - yy1 != 2 * this.MoveType - 1)
          return false;
      }
    }
    if (ttype1 != ttype0) {
      if (ttype0 != 5) return false;
      if (ttype1 >= 5) return false;
      if (yy1 != 7 - 7 * this.MoveType) return false;
    }
    if (ttype0 <= 5 && ccapt > 0) {
      jj = 15;
      while (jj >= 0 && ttype3 < 0) {
        if (
          this.PieceType[1 - this.MoveType][jj] > 0 &&
          this.PiecePosX[1 - this.MoveType][jj] == xx1 &&
          this.PiecePosY[1 - this.MoveType][jj] == yy1
        )
          ttype3 = this.PieceType[1 - this.MoveType][jj];
        else jj--;
      }
      if (ttype3 == -1 && ttype0 == 5 && this.CanPass >= 0) {
        jj = 15;
        while (jj >= 0 && ttype3 < 0) {
          if (
            this.PieceType[1 - this.MoveType][jj] == 5 &&
            this.PiecePosX[1 - this.MoveType][jj] == xx1 &&
            this.PiecePosY[1 - this.MoveType][jj] == yy1 - 1 + 2 * this.MoveType
          )
            ttype3 = this.PieceType[1 - this.MoveType][jj];
          else jj--;
        }
      }
      ttype3 = -1;
    }
    if (this.StoreMove(ii, ttype1, xx1, yy1, jj, ttype3, xx3, yy3, sstore))
      return true;
    return false;
  }

  private StoreMove(
    ii: number,
    ttype1: number,
    xx1: number,
    yy1: number,
    jj: number,
    ttype3: number,
    xx3: number,
    yy3: number,
    sstore: boolean
  ) {
    var iis_check = 0,
      // ll,
      cc = this.MoveCount - this.StartMove,
      ff = this.PiecePosX[this.MoveType][0],
      dd = 0;
    if (this.PieceType[this.MoveType][ii] == 5 || (jj >= 0 && ttype3 < 0)) {
      this.HalfMove[cc + 1] = 0;
    } else {
      this.HalfMove[cc + 1] = this.HalfMove[cc] + 1;
    }
    this.HistPiece[0][cc] = ii;
    this.HistType[0][cc] = this.PieceType[this.MoveType][ii];
    this.HistPosX[0][cc] = this.PiecePosX[this.MoveType][ii];
    this.HistPosY[0][cc] = this.PiecePosY[this.MoveType][ii];
    if (jj < 0) {
      this.HistPiece[1][cc] = -1;
    } else {
      if (ttype3 >= 0) {
        this.HistPiece[1][cc] = jj;
        this.HistType[1][cc] = this.PieceType[this.MoveType][jj];
        this.HistPosX[1][cc] = this.PiecePosX[this.MoveType][jj];
        this.HistPosY[1][cc] = this.PiecePosY[this.MoveType][jj];
      } else {
        this.HistPiece[1][cc] = 16 + jj;
        this.HistType[1][cc] = this.PieceType[1 - this.MoveType][jj];
        this.HistPosX[1][cc] = this.PiecePosX[1 - this.MoveType][jj];
        this.HistPosY[1][cc] = this.PiecePosY[1 - this.MoveType][jj];
      }
    }

    this.Board[this.PiecePosX[this.MoveType][ii]][
      this.PiecePosY[this.MoveType][ii]
    ] = 0;
    if (jj >= 0) {
      if (ttype3 < 0)
        this.Board[this.PiecePosX[1 - this.MoveType][jj]][
          this.PiecePosY[1 - this.MoveType][jj]
        ] = 0;
      else
        this.Board[this.PiecePosX[this.MoveType][jj]][
          this.PiecePosY[this.MoveType][jj]
        ] = 0;
    }
    this.PieceType[this.MoveType][ii] = ttype1;
    if (
      this.PiecePosX[this.MoveType][ii] != xx1 ||
      this.PiecePosY[this.MoveType][ii] != yy1 ||
      jj >= 0
    ) {
      this.PieceMoves[this.MoveType][ii]++;
      dd++;
    } //not a nullmove
    this.PiecePosX[this.MoveType][ii] = xx1;
    this.PiecePosY[this.MoveType][ii] = yy1;
    if (jj >= 0) {
      if (ttype3 < 0) {
        this.PieceType[1 - this.MoveType][jj] = ttype3;
        this.PieceMoves[1 - this.MoveType][jj]++;
      } else {
        this.PiecePosX[this.MoveType][jj] = xx3;
        this.PiecePosY[this.MoveType][jj] = yy3;
        this.PieceMoves[this.MoveType][jj]++;
      }
    }
    if (jj >= 0) {
      if (ttype3 < 0)
        this.Board[this.PiecePosX[1 - this.MoveType][jj]][
          this.PiecePosY[1 - this.MoveType][jj]
        ] = 0;
      else
        this.Board[this.PiecePosX[this.MoveType][jj]][
          this.PiecePosY[this.MoveType][jj]
        ] = (this.PieceType[this.MoveType][jj] + 1) * (1 - 2 * this.MoveType);
    }
    this.Board[this.PiecePosX[this.MoveType][ii]][
      this.PiecePosY[this.MoveType][ii]
    ] = (this.PieceType[this.MoveType][ii] + 1) * (1 - 2 * this.MoveType);

    if (ttype1 == 0 && ttype3 == 2) {
      //O-O-O, O-O
      while (ff > xx1) {
        iis_check += this.IsCheck(ff, this.MoveType * 7, this.MoveType);
        ff--;
      }
      while (ff < xx1) {
        iis_check += this.IsCheck(ff, this.MoveType * 7, this.MoveType);
        ff++;
      }
    }
    iis_check += this.IsCheck(
      this.PiecePosX[this.MoveType][0],
      this.PiecePosY[this.MoveType][0],
      this.MoveType
    );

    if (iis_check == 0 && sstore) {
      this.MoveArray[cc] =
        String.fromCharCode(97 + this.HistPosX[0][cc]) +
        (this.HistPosY[0][cc] + 1) +
        String.fromCharCode(97 + this.PiecePosX[this.MoveType][ii]) +
        (this.PiecePosY[this.MoveType][ii] + 1);
      if (this.HistType[0][cc] != this.PieceType[this.MoveType][ii]) {
        if (this.MoveType == 0)
          this.MoveArray[cc] += this.PieceName.charAt(
            this.PieceType[this.MoveType][ii]
          );
        else
          this.MoveArray[cc] += this.PieceName.charAt(
            this.PieceType[this.MoveType][ii]
          ).toLowerCase();
      }
      this.MoveArray.length = cc + 1;
      return true;
    }

    this.Board[this.PiecePosX[this.MoveType][ii]][
      this.PiecePosY[this.MoveType][ii]
    ] = 0;
    this.Board[this.HistPosX[0][cc]][this.HistPosY[0][cc]] =
      (this.HistType[0][cc] + 1) * (1 - 2 * this.MoveType);
    this.PieceType[this.MoveType][ii] = this.HistType[0][cc];
    this.PiecePosX[this.MoveType][ii] = this.HistPosX[0][cc];
    this.PiecePosY[this.MoveType][ii] = this.HistPosY[0][cc];
    this.PieceMoves[this.MoveType][ii] -= dd;
    if (jj >= 0) {
      if (ttype3 >= 0) {
        this.Board[this.PiecePosX[this.MoveType][jj]][
          this.PiecePosY[this.MoveType][jj]
        ] = 0;
        this.Board[this.HistPosX[0][cc]][this.HistPosY[0][cc]] =
          (this.HistType[0][cc] + 1) * (1 - 2 * this.MoveType);
        this.Board[this.HistPosX[1][cc]][this.HistPosY[1][cc]] =
          (this.HistType[1][cc] + 1) * (1 - 2 * this.MoveType);
        this.PieceType[this.MoveType][jj] = this.HistType[1][cc];
        this.PiecePosX[this.MoveType][jj] = this.HistPosX[1][cc];
        this.PiecePosY[this.MoveType][jj] = this.HistPosY[1][cc];
        this.PieceMoves[this.MoveType][jj]--;
      } else {
        this.Board[this.HistPosX[1][cc]][this.HistPosY[1][cc]] =
          (this.HistType[1][cc] + 1) * (2 * this.MoveType - 1);
        this.PieceType[1 - this.MoveType][jj] = this.HistType[1][cc];
        this.PiecePosX[1 - this.MoveType][jj] = this.HistPosX[1][cc];
        this.PiecePosY[1 - this.MoveType][jj] = this.HistPosY[1][cc];
        this.PieceMoves[1 - this.MoveType][jj]--;
      }
    }
    if (iis_check == 0) return true;
    return false;
  }

  private ParseMove(mm: string, sstore: boolean) {
    let ii;
    let ffrom = '';
    let ccapt = 0;
    let ll;
    let yy1i = -1;
    let ttype0 = -1;
    let xx0 = -1;
    let yy0 = -1;
    let ttype1 = -1;
    let xx1 = -1;
    let yy1 = -1;
    if (this.MoveCount > this.StartMove) {
      this.CanPass = -1;
      ii = this.HistPiece[0][this.MoveCount - this.StartMove - 1];
      if (
        this.HistType[0][this.MoveCount - this.StartMove - 1] == 5 &&
        Math.abs(
          this.HistPosY[0][this.MoveCount - this.StartMove - 1] -
            this.PiecePosY[1 - this.MoveType][ii]
        ) == 2
      )
        this.CanPass = this.PiecePosX[1 - this.MoveType][ii];
    } else this.CanPass = this.EnPass;
    ii = 1;
    while (ii < mm.length) {
      if (!isNaN(mm.charAt(ii) as any)) {
        xx1 = mm.charCodeAt(ii - 1) - 97;
        yy1 = (mm.charAt(ii) as any) - 1;
        yy1i = ii;
        ffrom = mm.substring(0, ii - 1);
      }
      ii++;
    }
    if (xx1 < 0 || xx1 > 7 || yy1 < 0 || yy1 > 7) {
      if (mm.indexOf('O') >= 0 || mm.indexOf('0') >= 0) {
        if (
          mm.indexOf('O-O-O') >= 0 ||
          mm.indexOf('0-0-0') >= 0 ||
          mm.indexOf('O–O–O') >= 0 ||
          mm.indexOf('0–0–0') >= 0
        ) {
          if (
            this.EvalMove(ttype0, 6, xx0, yy0, ttype1, xx1, yy1, ccapt, sstore)
          )
            return 1;
          return 0;
        }
        if (
          mm.indexOf('O-O') >= 0 ||
          mm.indexOf('0-0') >= 0 ||
          mm.indexOf('O–O') >= 0 ||
          mm.indexOf('0–0') >= 0
        ) {
          if (
            this.EvalMove(ttype0, 7, xx0, yy0, ttype1, xx1, yy1, ccapt, sstore)
          )
            return 1;
          return 0;
        }
        return 0;
      }
      if (mm.indexOf('---') >= 0 || mm.indexOf('–––') >= 0) {
        //if (mm.indexOf("...")>=0) //is buggy
        if (this.EvalMove(ttype0, 8, xx0, yy0, ttype1, xx1, yy1, ccapt, sstore))
          return 1;
        return 0;
      }
      return 0;
    }
    ll = ffrom.length;
    ttype0 = 5;
    if (ll > 0) {
      for (ii = 0; ii < 5; ii++) {
        if (ffrom.charCodeAt(0) == this.PieceCode[ii]) ttype0 = ii;
      }
      if (ffrom.charAt(ll - 1) == 'x') ccapt = 1;
      else {
        if (ffrom.charAt(ll - 1) == '-' || ffrom.charAt(ll - 1) == '–') ll--; //Smith Notation
      }
      if (isNaN(mm.charAt(ll - 1 - ccapt) as any)) {
        xx0 = ffrom.charCodeAt(ll - 1 - ccapt) - 97;
        if (xx0 < 0 || xx0 > 7) xx0 = -1;
      } else {
        yy0 = (ffrom.charAt(ll - 1 - ccapt) as any) - 1;
        if (yy0 < 0 || yy0 > 7) yy0 = -1;
      }
      if (yy0 >= 0 && isNaN(mm.charAt(ll - 2 - ccapt) as any)) {
        //Smith Notation
        xx0 = ffrom.charCodeAt(ll - 2 - ccapt) - 97;
        if (xx0 < 0 || xx0 > 7) xx0 = -1;
        else {
          ttype0 = Math.abs(this.Board[xx0][yy0]) - 1;
          if (ttype0 == 0 && xx0 - xx1 > 1 && yy0 == yy1) {
            if (this.EvalMove(ttype0, 6, xx0, yy0, -1, -1, -1, 0, sstore))
              return 1;
            return 0;
          }
          if (ttype0 == 0 && xx1 - xx0 > 1 && yy0 == yy1) {
            if (this.EvalMove(ttype0, 7, xx0, yy0, -1, -1, -1, 0, sstore))
              return 1;
            return 0;
          }
        }
      }
    }
    if (this.Board[xx1][yy1] != 0) ccapt = 1;
    else {
      if (ttype0 == 5 && xx1 == this.CanPass && yy1 == 5 - 3 * this.MoveType)
        ccapt = 1;
    }
    ttype1 = ttype0;
    ii = mm.indexOf('=');
    if (ii < 0) ii = yy1i;
    if (ii > 0 && ii < mm.length - 1) {
      if (ttype0 == 5) {
        ii = mm.charCodeAt(ii + 1);
        if (ii == this.PieceCode[1]) ttype1 = 1;
        if (ii == this.PieceCode[2]) ttype1 = 2;
        if (ii == this.PieceCode[3]) ttype1 = 3;
        if (ii == this.PieceCode[4]) ttype1 = 4;
      }
    }
    if (sstore) {
      for (ii = 0; ii < 16; ii++) {
        if (this.PieceType[this.MoveType][ii] == ttype0) {
          if (
            this.EvalMove(ii, ttype0, xx0, yy0, ttype1, xx1, yy1, ccapt, true)
          )
            return 1;
        }
      }
    } else {
      ll = 0;
      for (ii = 0; ii < 16; ii++) {
        if (this.PieceType[this.MoveType][ii] == ttype0) {
          if (
            this.EvalMove(ii, ttype0, xx0, yy0, ttype1, xx1, yy1, ccapt, false)
          )
            ll++;
        }
      }
      return ll;
    }
    return 0;
  }

  public getFen(move = 0): string {
    let ff_new = '';
    let ff_old = this.BuildFen();

    const diff = move - this.currentMove;

    if (diff > 0) {
      this.MoveForward(diff);
    } else {
      this.MoveBackward(Math.abs(diff));
    }
    ff_new = this.BuildFen();

    if (ff_new !== ff_old) {
      this.currentMove += diff;
    }

    return ff_new;
  }
}

export { pgnToFen };
