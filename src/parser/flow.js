/* parser generated by jison 0.4.15 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var parser = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,3],$V1=[1,7],$V2=[1,8],$V3=[8,12,24],$V4=[1,24],$V5=[8,19,21,23],$V6=[1,48],$V7=[1,43],$V8=[1,49],$V9=[1,45],$Va=[1,44],$Vb=[1,46],$Vc=[1,47],$Vd=[1,53],$Ve=[8,29],$Vf=[6,8,15,17,24,29,31,32,33];
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"expressions":3,"graph":4,"EOF":5,"SPACE":6,"edge":7,";":8,"styleStatement":9,"vertex":10,"link":11,"PIPE":12,"text":13,"STYLE":14,"ALPHA":15,"stylesOpt":16,"HEX":17,"SQS":18,"SQE":19,"PS":20,"PE":21,"DIAMOND_START":22,"DIAMOND_STOP":23,"MINUS":24,"ARROW_POINT":25,"ARROW_CIRCLE":26,"ARROW_CROSS":27,"style":28,"COMMA":29,"styleComponent":30,"COLON":31,"NUM":32,"UNIT":33,"colordef":34,"COLOR":35,"borderWidth":36,"borderStyle":37,"BORDER_STYLE":38,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",6:"SPACE",8:";",12:"PIPE",14:"STYLE",15:"ALPHA",17:"HEX",18:"SQS",19:"SQE",20:"PS",21:"PE",22:"DIAMOND_START",23:"DIAMOND_STOP",24:"MINUS",25:"ARROW_POINT",26:"ARROW_CIRCLE",27:"ARROW_CROSS",29:"COMMA",31:"COLON",32:"NUM",33:"UNIT",35:"COLOR",38:"BORDER_STYLE"},
productions_: [0,[3,2],[4,2],[4,3],[4,2],[7,1],[7,5],[7,3],[7,1],[9,5],[9,5],[10,4],[10,4],[10,4],[10,1],[13,3],[13,3],[13,2],[13,1],[11,3],[11,3],[11,3],[11,3],[16,1],[16,3],[28,1],[28,2],[30,1],[30,1],[30,1],[30,1],[30,1],[30,1],[30,1],[34,1],[34,1],[36,2],[37,1]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:
return $$[$0-1];
break;
case 2: case 3:
 this.$ = $$[$0];
break;
case 4:
 this.$ = $$[$0-1];
break;
case 5:
this.$ = 'ya';
break;
case 6:
 yy.addLink($$[$0-4],$$[$0-2],$$[$0-3],$$[$0]);this.$ = 'oy'
break;
case 7:
 yy.addLink($$[$0-2],$$[$0],$$[$0-1]);this.$ = 'oy'
break;
case 8:
this.$ = 'yo';
break;
case 9:
this.$ = $$[$0-4];yy.addVertex($$[$0-2],undefined,undefined,$$[$0]);
break;
case 10:
console.log('In parser - style: '+$$[$0]);this.$ = $$[$0-4];yy.updateLink($$[$0-2],$$[$0]);
break;
case 11:
this.$ = $$[$0-3];yy.addVertex($$[$0-3],$$[$0-1],'square');
break;
case 12:
this.$ = $$[$0-3];yy.addVertex($$[$0-3],$$[$0-1],'round');
break;
case 13:
this.$ = $$[$0-3];yy.addVertex($$[$0-3],$$[$0-1],'diamond');
break;
case 14:
this.$ = $$[$0];yy.addVertex($$[$0]);
break;
case 15:
this.$ = $$[$0-2] + ' ' +$$[$0];
break;
case 16:
this.$ = $$[$0-2] + '-' +$$[$0];
break;
case 17:
this.$ = $$[$0-1];
break;
case 18: case 37:
this.$ = $$[$0];
break;
case 19:
this.$ = {"type":"arrow"};
break;
case 20:
this.$ = {"type":"arrow_circle"};
break;
case 21:
this.$ = {"type":"arrow_cross"};
break;
case 22:
this.$ = {"type":"arrow_open"};
break;
case 23:
this.$ = [$$[$0]]
break;
case 24:
$$[$0-2].push($$[$0]);this.$ = $$[$0-2];
break;
case 25:
this.$=$$[$0];
break;
case 26:
this.$ = $$[$0-1] + $$[$0];
break;
case 27: case 28: case 29: case 30: case 31: case 32: case 33:
this.$=$$[$0]
break;
case 34: case 35:
this.$ = yytext;
break;
case 36:
this.$ = $$[$0-1]+''+$$[$0];
break;
}
},
table: [{3:1,4:2,6:$V0,7:4,9:5,10:6,14:$V1,15:$V2},{1:[3]},{5:[1,9]},{4:10,6:$V0,7:4,9:5,10:6,14:$V1,15:$V2},{8:[1,11]},{8:[2,5]},{8:[2,8],11:12,24:[1,13]},{6:[1,14]},o($V3,[2,14],{18:[1,15],20:[1,16],22:[1,17]}),{1:[2,1]},{5:[2,2]},{4:18,5:[2,4],6:$V0,7:4,9:5,10:6,14:$V1,15:$V2},{10:19,15:$V2},{24:[1,20]},{15:[1,21],17:[1,22]},{13:23,15:$V4},{13:25,15:$V4},{13:26,15:$V4},{5:[2,3]},{8:[2,7],12:[1,27]},{24:[1,31],25:[1,28],26:[1,29],27:[1,30]},{6:[1,32]},{6:[1,33]},{19:[1,34]},o($V5,[2,18],{6:[1,35],24:[1,36]}),{21:[1,37]},{23:[1,38]},{13:39,15:$V4},{15:[2,19]},{15:[2,20]},{15:[2,21]},{15:[2,22]},{6:$V6,15:$V7,16:40,17:$V8,24:$V9,28:41,30:42,31:$Va,32:$Vb,33:$Vc},{6:$V6,15:$V7,16:50,17:$V8,24:$V9,28:41,30:42,31:$Va,32:$Vb,33:$Vc},o($V3,[2,11]),o($V5,[2,17],{13:51,15:$V4}),{13:52,15:$V4},o($V3,[2,12]),o($V3,[2,13]),{8:[2,6]},{8:[2,9],29:$Vd},o($Ve,[2,23],{30:54,6:$V6,15:$V7,17:$V8,24:$V9,31:$Va,32:$Vb,33:$Vc}),o($Vf,[2,25]),o($Vf,[2,27]),o($Vf,[2,28]),o($Vf,[2,29]),o($Vf,[2,30]),o($Vf,[2,31]),o($Vf,[2,32]),o($Vf,[2,33]),{8:[2,10],29:$Vd},o($V5,[2,15]),o($V5,[2,16]),{6:$V6,15:$V7,17:$V8,24:$V9,28:55,30:42,31:$Va,32:$Vb,33:$Vc},o($Vf,[2,26]),o($Ve,[2,24],{30:54,6:$V6,15:$V7,17:$V8,24:$V9,31:$Va,32:$Vb,33:$Vc})],
defaultActions: {5:[2,5],9:[2,1],10:[2,2],18:[2,3],28:[2,19],29:[2,20],30:[2,21],31:[2,22],39:[2,6]},
parseError: function parseError(str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        throw new Error(str);
    }
},
parse: function parse(input) {
    var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
        }
    }
    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);
    var ranges = lexer.options && lexer.options.ranges;
    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    _token_stack:
        function lex() {
            var token;
            token = lexer.lex() || EOF;
            if (typeof token !== 'number') {
                token = self.symbols_[token] || token;
            }
            return token;
        }
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(lexer.yytext);
            lstack.push(lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                sharedState.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};

/*define('parser/mermaid',function(){
    return parser;
});*//* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function (match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex() {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState() {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules() {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState(n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState(condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:return 14;
break;
case 1:return 17;
break;
case 2:return 32;
break;
case 3:return 'BRKT';
break;
case 4:return 33;
break;
case 5:return 33;
break;
case 6:return 33;
break;
case 7:return 31;
break;
case 8:return 24;
break;
case 9:return 8;
break;
case 10:return 29;
break;
case 11:return 27;
break;
case 12:return 25;
break;
case 13:return 26;
break;
case 14:return 15;
break;
case 15:return 12;
break;
case 16:return 20;
break;
case 17:return 21;
break;
case 18:return 18;
break;
case 19:return 19;
break;
case 20:return 22
break;
case 21:return 23
break;
case 22:return 6;
break;
case 23:return 'NEWLINE';
break;
case 24:return 5;
break;
}
},
rules: [/^(?:style\b)/,/^(?:#[a-f0-9]+)/,/^(?:[0-9]+)/,/^(?:#)/,/^(?:px\b)/,/^(?:pt\b)/,/^(?:dot\b)/,/^(?::)/,/^(?:-)/,/^(?:;)/,/^(?:,)/,/^(?:[x])/,/^(?:>)/,/^(?:[o])/,/^(?:[a-zåäöæøA-ZÅÄÖÆØ]+)/,/^(?:\|)/,/^(?:\()/,/^(?:\))/,/^(?:\[)/,/^(?:\])/,/^(?:\{)/,/^(?:\})/,/^(?:\s)/,/^(?:\n)/,/^(?:$)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = parser;
exports.Parser = parser.Parser;
exports.parse = function () { return parser.parse.apply(parser, arguments); };
exports.main = function commonjsMain(args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}