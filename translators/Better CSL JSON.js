{
	"translatorID": "f4b52ab0-f878-4556-85a0-c7aeedd09dfc",
	"label": "Better CSL JSON",
	"description": "exports items in pandoc-compatible CSL-JSON format, with added citation keys and parsing of metadata",
	"creator": "Emiliano heyns",
	"target": "json",
	"minVersion": "4.0.27",
	"maxVersion": "",
	"displayOptions": {
		"keepUpdated": false,
		"worker": true
	},
	"configOptions": {
		"getCollections": true,
		"cached": true,
		"hash": "8a60efdedae19e33bb8c1d54fef5842a5a702336514eaa7b79509665318a8e83"
	},
	"translatorType": 2,
	"browserSupport": "gcsv",
	"inRepository": false,
	"priority": 100,
	"lastUpdated": "2024-04-11"
}

ZOTERO_CONFIG = {"GUID":"zotero@zotero.org","ID":"zotero","CLIENT_NAME":"Zotero","DOMAIN_NAME":"zotero.org","PRODUCER":"Digital Scholar","PRODUCER_URL":"https://digitalscholar.org","REPOSITORY_URL":"https://repo.zotero.org/repo/","BASE_URI":"http://zotero.org/","WWW_BASE_URL":"https://www.zotero.org/","PROXY_AUTH_URL":"https://zoteroproxycheck.s3.amazonaws.com/test","API_URL":"https://api.zotero.org/","STREAMING_URL":"wss://stream.zotero.org/","SERVICES_URL":"https://services.zotero.org/","API_VERSION":3,"CONNECTOR_MIN_VERSION":"5.0.39","PREF_BRANCH":"extensions.zotero.","BOOKMARKLET_ORIGIN":"https://www.zotero.org","BOOKMARKLET_URL":"https://www.zotero.org/bookmarklet/","START_URL":"https://www.zotero.org/start","QUICK_START_URL":"https://www.zotero.org/support/quick_start_guide","PDF_TOOLS_URL":"https://www.zotero.org/download/xpdf/","SUPPORT_URL":"https://www.zotero.org/support/","SYNC_INFO_URL":"https://www.zotero.org/support/sync","TROUBLESHOOTING_URL":"https://www.zotero.org/support/getting_help","FEEDBACK_URL":"https://forums.zotero.org/","CONNECTORS_URL":"https://www.zotero.org/download/connectors","CHANGELOG_URL":"https://www.zotero.org/support/changelog","CREDITS_URL":"https://www.zotero.org/support/credits_and_acknowledgments","LICENSING_URL":"https://www.zotero.org/support/licensing","GET_INVOLVED_URL":"https://www.zotero.org/getinvolved","DICTIONARIES_URL":"https://download.zotero.org/dictionaries/","PLUGINS_URL":"https://www.zotero.org/support/plugins"}

        if (typeof ZOTERO_TRANSLATOR_INFO === 'undefined') var ZOTERO_TRANSLATOR_INFO = {}; // declare if not declared
        Object.assign(ZOTERO_TRANSLATOR_INFO, {"translatorID":"f4b52ab0-f878-4556-85a0-c7aeedd09dfc","label":"Better CSL JSON","description":"exports items in pandoc-compatible CSL-JSON format, with added citation keys and parsing of metadata","creator":"Emiliano heyns","target":"json","minVersion":"4.0.27","maxVersion":"","displayOptions":{"keepUpdated":false,"worker":true},"configOptions":{"getCollections":true,"cached":true},"translatorType":2,"browserSupport":"gcsv","inRepository":false,"priority":100}); // assign new data
      
var { doExport } = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // translators/Better CSL JSON.ts
  var Better_CSL_JSON_exports = {};
  __export(Better_CSL_JSON_exports, {
    doExport: () => doExport
  });

  // content/client.ts
  var is7 = typeof location !== "undefined" && location.search ? new URLSearchParams(location.search).get("is7") === "true" : Zotero.platformMajorVersion >= 102;
  function clientname() {
    var _a;
    if (typeof location !== "undefined" && location.search)
      return new URLSearchParams(location.search).get("clientName");
    if (Zotero.clientName)
      return Zotero.clientName;
    if ((_a = Zotero.BetterBibTeX) == null ? void 0 : _a.clientName)
      return Zotero.BetterBibTeX.clientName;
    throw new Error("Unable to detect clientName");
  }
  var clientName = clientname();
  var client = clientName.toLowerCase().replace("-", "");

  // gen/osfile.js
  var OS2 = {
    Constants: {
      Path: {
        get homeDir() {
          return FileUtils.getDir("Home", []).path;
        },
        get libDir() {
          return FileUtils.getDir("GreBinD", []).path;
        },
        get profileDir() {
          return FileUtils.getDir("ProfD", []).path;
        },
        get tmpDir() {
          return FileUtils.getDir("TmpD", []).path;
        }
      }
    },
    File: {
      DirectoryIterator: function(path) {
        var initialized = false;
        var paths = [];
        async function init() {
          paths.push(...await IOUtils.getChildren(path));
          initialized = true;
        }
        async function getEntry(path2) {
          var info = await IOUtils.stat(path2);
          return {
            name: PathUtils.filename(path2),
            path: path2,
            isDir: info.type == "directory"
          };
        }
        this.nextBatch = async function(num) {
          if (!initialized) {
            await init();
          }
          var entries = [];
          while (paths.length && num > 0) {
            entries.push(await getEntry(paths.shift()));
            num--;
          }
          return entries;
        };
        this.forEach = async function(func) {
          if (!initialized) {
            await init();
          }
          var i = 0;
          while (paths.length) {
            let entry = await getEntry(paths.shift());
            await func(entry, i++, this);
          }
        };
        this.close = function() {
        };
      },
      Error: function(msg) {
        this.message = msg;
        this.stack = new Error().stack;
      },
      copy: wrapWrite(async function(src, dest) {
        return IOUtils.copy(src, dest);
      }),
      exists: async function(path) {
        try {
          return await IOUtils.exists(path);
        } catch (e) {
          if (e.message.includes("NS_ERROR_FILE_UNRECOGNIZED_PATH")) {
            dump(e.message + "\n\n" + e.stack + "\n\n");
            Components.utils.reportError(e);
            return false;
          }
        }
      },
      makeDir: wrapWrite(async function(path, options2 = {}) {
        try {
          return await IOUtils.makeDirectory(
            path,
            {
              ignoreExisting: options2.ignoreExisting !== false,
              createAncestors: !!options2.from,
              permissions: options2.unixMode
            }
          );
        } catch (e) {
          if (e.name == "InvalidAccessError") {
            if (/Could not create directory because the target file(.+) exists and is not a directory/.test(e.message)) {
              let osFileError = new OS2.File.Error(e.message);
              osFileError.becauseExists = true;
              throw osFileError;
            }
          }
        }
      }),
      move: wrapWrite(async function(src, dest, options2 = {}) {
        if (options2.noCopy) {
          throw new Error("noCopy is no longer supported");
        }
        var destFileInfo = null;
        try {
          destFileInfo = await IOUtils.stat(dest);
        } catch (e) {
          if (e.name != "NotFoundError") {
            throw e;
          }
        }
        if (destFileInfo) {
          if (destFileInfo.type == "directory") {
            throw new Error("OS.File.move() destination cannot be a directory -- use IOUtils.move()");
          }
          if (options2.noOverwrite) {
            let e = new OS2.File.Error();
            e.becauseExists = true;
            throw e;
          }
        }
        return IOUtils.move(src, dest, options2);
      }),
      read: async function(path, options2 = {}) {
        if (options2.encoding) {
          if (!/^utf\-?8$/i.test(options2.encoding)) {
            throw new Error("Can only read UTF-8");
          }
          return IOUtils.readUTF8(path);
        }
        return IOUtils.read(
          path,
          {
            maxBytes: options2.bytes
          }
        );
      },
      remove: async function(path, options2 = {}) {
        return IOUtils.remove(path, options2);
      },
      removeDir: async function(path, options2 = {}) {
        return IOUtils.remove(
          path,
          {
            recursive: true,
            // OS.File.removeDir defaulted to ignoreAbsent: true
            ignoreAbsent: options2.ignoreAbsent !== false
          }
        );
      },
      removeEmptyDir: async function(path) {
        return IOUtils.remove(path);
      },
      setDates: async function(path, atime, mtime) {
        if (atime) {
          await IOUtils.setAccessTime(path, atime.valueOf());
        }
        return await IOUtils.setModificationTime(path, mtime ? mtime.valueOf() : void 0);
      },
      setPermissions: async function(path, { unixMode, winAttributes } = {}) {
        await IOUtils.setPermissions(path, unixMode);
        if (winAttributes && Zotero.isWin) {
          let { readOnly, hidden, system } = winAttributes;
          await IOUtils.setWindowsAttributes(path, { readOnly, hidden, system });
        }
      },
      stat: async function stat(path) {
        var info;
        try {
          info = await IOUtils.stat(path);
        } catch (e) {
          if (e.name == "NotFoundError") {
            let osFileError = new this.Error("File not found");
            osFileError.becauseNoSuchFile = true;
            throw osFileError;
          }
          throw e;
        }
        return {
          isDir: info.type == "directory",
          isSymLink: true,
          // Supposedly was broken in Firefox
          size: info.size,
          lastAccessDate: new Date(info.lastAccessed),
          lastModificationDate: new Date(info.lastModified)
        };
      },
      unixSymLink: async function(pathTarget, pathCreate) {
        if (await IOUtils.exists(pathCreate)) {
          let osFileError = new this.Error(pathCreate + " already exists");
          osFileError.becauseExists = true;
          throw osFileError;
        }
        const { ctypes } = ChromeUtils.importESModule(
          "resource://gre/modules/ctypes.sys.mjs"
        );
        try {
          if (Services.appinfo.OS === "Darwin") {
            const libc = ctypes.open(
              Services.appinfo.OS === "Darwin" ? "libSystem.B.dylib" : "libc.so"
            );
            const symlink = libc.declare(
              "symlink",
              ctypes.default_abi,
              ctypes.int,
              // return value
              ctypes.char.ptr,
              // target
              ctypes.char.ptr
              //linkpath
            );
            if (symlink(pathTarget, pathCreate)) {
              throw new Error("Failed to create symlink at " + pathCreate);
            }
          } else {
            let ln = Cc["@mozilla.org/file/local;1"].createInstance(Ci.nsIFile);
            ln.initWithPath("/bin/ln");
            let process = Cc["@mozilla.org/process/util;1"].createInstance(Ci.nsIProcess);
            process.init(ln);
            let args = ["-s", pathTarget, pathCreate];
            process.run(true, args, args.length);
          }
        } catch (e) {
          dump(e.message + "\n\n");
          throw new Error("Failed to create symlink at " + pathCreate);
        }
      },
      writeAtomic: async function(path, bytes, options2 = {}) {
        if (options2.backupTo) {
          options2.backupFile = options2.backupTo;
        }
        if (options2.noOverwrite) {
          options2.mode = "create";
        }
        if (options2.encoding == "utf-8") {
          return IOUtils.writeUTF8(path, bytes, options2);
        }
        return IOUtils.write(path, bytes, options2);
      }
    },
    Path: {
      basename: function(path) {
        return PathUtils.filename(path);
      },
      dirname: function(path) {
        return PathUtils.parent(path);
      },
      fromFileURI: function(uri) {
        let url = new URL(uri);
        if (url.protocol != "file:") {
          throw new Error("fromFileURI expects a file URI");
        }
        let path = this.normalize(decodeURIComponent(url.pathname));
        return path;
      },
      join: function(path, ...args) {
        var platformSlash = Services.appinfo.OS == "WINNT" ? "\\" : "/";
        try {
          if (args.length == 0) {
            return path;
          }
          if (args.length == 1 && args[0].includes(platformSlash)) {
            return PathUtils.joinRelative(path, ...args);
          }
          return PathUtils.join(path, ...args);
        } catch (e) {
          if (e.message.includes("NS_ERROR_FILE_UNRECOGNIZED_PATH")) {
            Cu.reportError("WARNING: " + e.message + " -- update for IOUtils");
            return [path, ...args].join(platformSlash);
          }
          throw e;
        }
      },
      // From Firefox 102
      normalize: function(path) {
        let stack = [];
        let absolute;
        if (path.length >= 0 && path[0] == "/") {
          absolute = true;
        } else {
          absolute = false;
        }
        path.split("/").forEach(function(v) {
          switch (v) {
            case "":
            case ".":
              break;
            case "..":
              if (!stack.length) {
                if (absolute) {
                  throw new Error("Path is ill-formed: attempting to go past root");
                } else {
                  stack.push("..");
                }
              } else if (stack[stack.length - 1] == "..") {
                stack.push("..");
              } else {
                stack.pop();
              }
              break;
            default:
              stack.push(v);
          }
        });
        let string = stack.join("/");
        return absolute ? "/" + string : string;
      },
      toFileURI: function(path) {
        return PathUtils.toFileURI(path);
      }
    }
  };
  function wrapWrite(func) {
    return async function() {
      try {
        return await func(...arguments);
      } catch (e) {
        if (DOMException.isInstance(e)) {
          if (e.name == "NoModificationAllowedError") {
            e.becauseExists = true;
          }
        }
        throw e;
      }
    };
  }

  // content/os.ts
  var Shim = is7 ? OS2 : void 0;
  if (is7 && !Shim.Path.split) {
    Shim.Path.split = (path) => {
      path = Shim.Path.normalize(path);
      if (Services.appinfo.OS === "WINNT") {
        const absolute = !!path.match(/^[A-Z]:\\/i);
        const components = path.replace(/^[A-Z]:\\/i, "").replace(/\\$/, "").split("\\");
        const winDrive = absolute ? path[0] : void 0;
        return { absolute, components, winDrive };
      } else {
        const absolute = path[0] === "/";
        const components = path.replace(/^\//, "").replace(/\/$/, "").split("/");
        return { absolute, components };
      }
    };
  }

  // gen/preferences/meta.ts
  var defaults = {
    ascii: "",
    asciiBibLaTeX: false,
    asciiBibTeX: true,
    autoAbbrev: false,
    autoAbbrevStyle: "",
    autoExport: "immediate",
    autoExportDelay: 5,
    autoExportIdleWait: 10,
    autoExportPathReplaceDiacritics: false,
    autoExportPathReplaceDirSep: "-",
    autoExportPathReplaceSpace: " ",
    automaticTags: true,
    autoPinDelay: 0,
    auxImport: false,
    baseAttachmentPath: "",
    biblatexExtendedDateFormat: true,
    biblatexExtendedNameFormat: true,
    biblatexExtractEprint: true,
    bibtexEditionOrdinal: false,
    bibtexParticleNoOp: false,
    bibtexURL: "off",
    cache: true,
    cacheFlushInterval: 5,
    charmap: "",
    citeCommand: "cite",
    citekeyCaseInsensitive: true,
    citekeyFold: true,
    citekeyFormat: "auth.lower + shorttitle(3,3) + year",
    citekeyFormatEditing: "",
    citekeySearch: true,
    citekeyUnsafeChars: `\\"#%'(),={}~`,
    csquotes: "",
    DOIandURL: "both",
    exportBibTeXStrings: "off",
    exportBraceProtection: true,
    exportTitleCase: true,
    extraMergeCitekeys: false,
    extraMergeCSL: false,
    extraMergeTeX: false,
    git: "config",
    import: true,
    importBibTeXStrings: true,
    importCaseProtection: "as-needed",
    importCitationKey: true,
    importDetectURLs: true,
    importExtra: true,
    importJabRefAbbreviations: true,
    importJabRefStrings: true,
    importNoteToExtra: "",
    importSentenceCase: "on+guess",
    importSentenceCaseQuoted: true,
    importUnknownTexCommand: "ignore",
    itemObserverDelay: 5,
    jabrefFormat: 0,
    jieba: false,
    keyConflictPolicy: "keep",
    keyScope: "library",
    kuroshiro: false,
    language: "langid",
    logEvents: true,
    mapMath: "",
    mapText: "",
    packages: "",
    parseParticles: true,
    patchDates: "dateadded=dateAdded, date-added=dateAdded, datemodified=dateModified, date-modified=dateModified",
    platform: "",
    postscript: "",
    postscriptOverride: "",
    preferencesOverride: "",
    qualityReport: false,
    quickCopyEta: "",
    quickCopyMode: "latex",
    quickCopyOrgMode: "zotero",
    quickCopyPandocBrackets: false,
    quickCopySelectLink: "zotero",
    rawImports: false,
    rawLaTag: "#LaTeX",
    relativeFilePaths: false,
    retainCache: false,
    scrubDatabase: false,
    separatorList: "and",
    separatorNames: "and",
    skipFields: "",
    skipWords: "a,ab,aboard,about,above,across,after,against,al,along,amid,among,an,and,anti,around,as,at,before,behind,below,beneath,beside,besides,between,beyond,but,by,d,da,das,de,del,dell,dello,dei,degli,della,dell,delle,dem,den,der,des,despite,die,do,down,du,during,ein,eine,einem,einen,einer,eines,el,en,et,except,for,from,gli,i,il,in,inside,into,is,l,la,las,le,les,like,lo,los,near,nor,of,off,on,onto,or,over,past,per,plus,round,save,since,so,some,sur,than,the,through,to,toward,towards,un,una,unas,under,underneath,une,unlike,uno,unos,until,up,upon,versus,via,von,while,with,within,without,yet,zu,zum",
    startupProgress: "popup",
    strings: "",
    stringsOverride: "",
    testing: false,
    verbatimFields: "url,doi,file,pdf,ids,eprint,/^verb[a-z]$/,groups,/^citeulike-linkout-[0-9]+$/, /^bdsk-url-[0-9]+$/, keywords",
    warnBulkModify: 10,
    warnTitleCased: false
  };
  var affectedBy = {
    "BetterBibTeX JSON": [],
    "Better BibLaTeX": [
      "ascii",
      "asciiBibLaTeX",
      "autoAbbrev",
      "autoAbbrevStyle",
      "automaticTags",
      "baseAttachmentPath",
      "biblatexExtendedDateFormat",
      "biblatexExtendedNameFormat",
      "biblatexExtractEprint",
      "cache",
      "charmap",
      "csquotes",
      "DOIandURL",
      "exportBibTeXStrings",
      "exportBraceProtection",
      "exportTitleCase",
      "jabrefFormat",
      "language",
      "mapMath",
      "mapText",
      "packages",
      "parseParticles",
      "postscript",
      "qualityReport",
      "rawLaTag",
      "relativeFilePaths",
      "separatorList",
      "separatorNames",
      "skipFields",
      "skipWords",
      "strings",
      "verbatimFields"
    ],
    "Better BibTeX": [
      "ascii",
      "asciiBibTeX",
      "autoAbbrev",
      "autoAbbrevStyle",
      "automaticTags",
      "baseAttachmentPath",
      "biblatexExtractEprint",
      "bibtexEditionOrdinal",
      "bibtexParticleNoOp",
      "bibtexURL",
      "cache",
      "charmap",
      "csquotes",
      "DOIandURL",
      "exportBibTeXStrings",
      "exportBraceProtection",
      "exportTitleCase",
      "jabrefFormat",
      "language",
      "mapMath",
      "mapText",
      "packages",
      "parseParticles",
      "postscript",
      "qualityReport",
      "rawLaTag",
      "relativeFilePaths",
      "separatorList",
      "separatorNames",
      "skipFields",
      "skipWords",
      "strings",
      "verbatimFields"
    ],
    "Better CSL JSON": [
      "autoAbbrev",
      "autoAbbrevStyle",
      "automaticTags",
      "baseAttachmentPath",
      "cache",
      "parseParticles",
      "postscript",
      "skipFields"
    ],
    "Better CSL YAML": [
      "autoAbbrev",
      "autoAbbrevStyle",
      "automaticTags",
      "baseAttachmentPath",
      "cache",
      "parseParticles",
      "postscript",
      "skipFields"
    ]
  };
  var options = {
    "autoExport": {
      "immediate": "On Change",
      "idle": "When Idle",
      "off": "Paused"
    },
    "bibtexURL": {
      "off": "no",
      "note": "in the 'note' field",
      "note-url-ish": "in the 'note' field, but assuming the 'url' package is not loaded",
      "url": "in the 'url' field",
      "url-ish": "in the 'url' field, but assuming the 'url' package is not loaded"
    },
    "DOIandURL": {
      "both": "both",
      "doi": "DOI",
      "url": "URL"
    },
    "exportBibTeXStrings": {
      "off": "No",
      "detect": "Assume single-word fields to be @string vars",
      "match": "Match against the @string declarations below",
      "match+reverse": "Match against the @string declarations and their values below"
    },
    "importCaseProtection": {
      "as-needed": "minimal",
      "on": "yes",
      "off": "no"
    },
    "importSentenceCase": {
      "on+guess": "yes, but try to exclude already-sentence-cased titles",
      "on": "yes",
      "off": "no (import titles as-is)"
    },
    "jabrefFormat": {
      "0": "no",
      "3": "for JabRef 3",
      "4": "for JabRef 4",
      "5": "for JabRef 5"
    },
    "keyConflictPolicy": {
      "change": "postfixed (causes key changes)",
      "keep": "kept (causes key duplicates)"
    },
    "keyScope": {
      "global": "across all libraries",
      "library": "within each library"
    },
    "language": {
      "langid": "langid",
      "language": "language",
      "both": "both"
    },
    "quickCopyMode": {
      "latex": "LaTeX citation",
      "citekeys": "Cite Keys",
      "eta": "Eta template",
      "gitbook": "GitBook",
      "orgRef": "org-ref citation",
      "orgRef3": "org-ref v3 citation",
      "orgmode": "Org-mode select link",
      "pandoc": "Pandoc citation",
      "roamCiteKey": "Roam Cite Key",
      "rtfScan": "RTF Scan marker",
      "selectlink": "Zotero select link",
      "jupyter": "Jupyter notebook",
      "jekyll": "Jekyll cite"
    },
    "quickCopyOrgMode": {
      "zotero": "using Zotero item key",
      "citationkey": "using Better BibTeX citation key"
    },
    "quickCopySelectLink": {
      "zotero": "using Zotero item key",
      "citationkey": "using Better BibTeX citation key"
    }
  };

  // translators/lib/translator.ts
  var $OS = is7 ? Shim : OS;
  var PrefNames = new Set(Object.keys(defaults));
  var cacheDisabler = new class {
    get(target, property) {
      if (property === "collections") {
        target.$cacheable = false;
      }
      return target[property];
    }
    /*
    set(target, property, value): boolean {
      if (property === '$cacheable' && target.$cacheable && !value) log.debug('cache-rate: not for', target, (new Error).stack)
      target[property] = value
      return true
    }
    */
  }();
  var Items = class {
    constructor(items) {
      this.items = [];
      this.map = {};
      if (items) {
        this.items = items.map((item) => this.map[item.itemID] = this.map[item.itemKey] = new Proxy(item, cacheDisabler));
      } else {
        let item;
        while (item = Zotero.nextItem()) {
          this.items.push(this.map[item.itemID] = this.map[item.itemKey] = new Proxy(item, cacheDisabler));
        }
      }
      this.items.sort((a, b) => {
        const ka = [a.citationKey || a.itemType, a.dateModified || a.dateAdded, a.itemID].join("	");
        const kb = [b.citationKey || b.itemType, b.dateModified || b.dateAdded, b.itemID].join("	");
        return ka.localeCompare(kb, void 0, { sensitivity: "base" });
      });
    }
    erase() {
      this.items = [];
      this.map = {};
      this.current = null;
    }
    cacheable(cacheable) {
      for (const item of this.items) {
        item.$cacheable = cacheable;
      }
    }
    *[Symbol.iterator]() {
      for (const item of this.items) {
        yield item;
      }
    }
    get regular() {
      return this._regular();
    }
    *_regular() {
      for (const item of this.items) {
        switch (item.itemType) {
          case "annotation":
          case "note":
          case "attachment":
            break;
          default:
            yield this.current = item;
        }
      }
    }
  };
  var Collections = class {
    constructor(items, collections) {
      this.items = items;
      this.byKey = {};
      if (collections) {
        this.byKey = collections;
      } else if (Zotero.nextCollection) {
        let collection;
        while (collection = Zotero.nextCollection()) {
          this.registerCollection(collection, "");
        }
      }
    }
    erase() {
      this.byKey = {};
    }
    registerCollection(collection, parent) {
      const key = (collection.primary ? collection.primary : collection).key;
      if (this.byKey[key])
        return;
      this.byKey[key] = {
        key,
        parent,
        name: collection.name,
        collections: [],
        items: []
      };
      for (const child of collection.descendents || collection.children) {
        switch (child.type) {
          case "collection":
            this.byKey[key].collections.push(child.key);
            this.registerCollection(child, key);
            break;
          case "item":
            this.byKey[key].items.push(child.id);
            break;
        }
      }
    }
    get collectionTree() {
      return Object.values(this.byKey).filter((coll) => !coll.parent).map((coll) => this.nestedCollection(coll));
    }
    nestedCollection(collection) {
      const nested = {
        key: collection.key,
        name: collection.name,
        items: collection.items.map((itemID) => this.items.map[itemID]).filter((item) => item),
        collections: collection.collections.map((key) => this.nestedCollection(this.byKey[key])).filter((coll) => coll)
      };
      for (const coll of nested.collections) {
        coll.parent = nested;
      }
      return nested;
    }
  };
  function escapeRegExp(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
  }
  function collect() {
    const items = new Items();
    return { items, collections: new Collections(items) };
  }
  var Override = class {
    constructor(preferences) {
      this.preferences = preferences;
      this.orig = { ...this.preferences };
      this.exportPath = Zotero.getOption("exportPath");
      this.exportDir = Zotero.getOption("exportDir");
    }
    override(preference, extension) {
      var _a;
      const override = this.orig[`${preference}Override`];
      if (!this.exportPath || !override) {
        return false;
      }
      const candidates = [
        $OS.Path.basename(this.exportPath).replace(/\.[^.]+$/, "") + extension,
        override
      ].map((filename) => $OS.Path.join(this.exportDir, filename));
      for (const candidate of candidates) {
        Zotero.debug(`better-bibtex: looking for override ${preference} in ${candidate}`);
        try {
          const content = Zotero.BetterBibTeX.getContents(candidate);
          if (content === null) {
            Zotero.debug(`better-bibtex: override ${candidate} not found`);
            continue;
          }
          let prefs;
          if (preference === "preferences") {
            prefs = (_a = JSON.parse(content).override) == null ? void 0 : _a.preferences;
            if (!prefs)
              continue;
          } else {
            prefs = { [preference]: content };
          }
          for (const [pref, value] of Object.entries(prefs)) {
            if (!PrefNames.has(pref)) {
              Zotero.debug(`better-bibtex: unexpected preference override for ${pref}`);
            } else if (typeof value !== typeof defaults[pref]) {
              Zotero.debug(`better-bibtex: preference override for ${pref}: expected ${typeof defaults[pref]}, got ${typeof value}`);
            } else if (options[pref] && !options[pref][value]) {
              Zotero.debug(`better-bibtex: preference override for ${pref}: expected ${Object.keys(options[pref]).join(" / ")}, got ${value}`);
            } else {
              this.preferences[pref] = value;
            }
          }
          Zotero.debug(`better-bibtex: override ${candidate} loaded`);
          return true;
        } catch (err) {
          Zotero.debug(`better-bibtex: failed to load override ${candidate}: ${err}`);
        }
      }
      return false;
    }
  };
  var Translation = class {
    constructor(translator, mode) {
      this.translator = translator;
      this.mode = mode;
      this.export = {
        dir: void 0,
        path: void 0
      };
      this.collections = {};
      // keep because it is being used in postscripts
      this.output = {
        body: "",
        attachments: []
      };
      this.cacheable = true;
      this[translator.label.replace(/[^a-z]/ig, "")] = true;
      this.BetterTeX = this.BetterBibTeX || this.BetterBibLaTeX;
      this.BetterCSL = this.BetterCSLJSON || this.BetterCSLYAML;
      this.options = translator.displayOptions || {};
      this.platform = Zotero.getHiddenPref("better-bibtex.platform");
      this.isJurisM = client === "jurism";
      this.isZotero = !this.isJurisM;
      this.paths = {
        caseSensitive: this.platform !== "mac" && this.platform !== "win",
        sep: this.platform === "win" ? "\\" : "/"
      };
      try {
        if (Zotero.getOption("cache") === false)
          this.cacheable = false;
      } catch (err) {
      }
      for (const key in this.options) {
        if (typeof this.options[key] === "boolean") {
          this.options[key] = Zotero.getOption(key);
        } else {
          this.options[key] = !!Zotero.getOption(key);
        }
      }
      this.options.custom = Zotero.getOption("custom");
      this.preferences = Object.entries(defaults).reduce((acc, [pref, dflt]) => {
        var _a;
        acc[pref] = (_a = Zotero.getHiddenPref(`better-bibtex.${pref}`)) != null ? _a : dflt;
        return acc;
      }, {});
      const override = new Override(this.preferences);
      if (override.override("preferences", ".json"))
        this.cacheable = false;
      if (override.override("postscript", ".js"))
        this.cacheable = false;
      if (override.override("strings", ".bib"))
        this.cacheable = false;
      try {
        this.charmap = JSON.parse(this.preferences.charmap);
      } catch (err) {
        this.charmap = {};
      }
      this.importToExtra = {};
      this.preferences.importNoteToExtra.toLowerCase().split(/\s*,\s*/).filter((field) => field).forEach((field) => {
        this.importToExtra[field.replace(/\s*=.*/, "")] = field.match(/\s*=\s*force$/) ? "force" : "plain";
      });
      this.skipFields = this.preferences.skipFields.toLowerCase().split(",").map((field) => this.typefield(field)).filter((s) => s);
      let m;
      if (this.skipFields.length) {
        this.skipField = new RegExp("^(" + this.skipFields.map((field) => {
          if (m = field.match(/^(csl|tex|bibtex|biblatex)[.]([-a-z]+)[.]([-a-z]+)$/)) {
            return `(${m[1] === "tex" ? "bib(la)?" : ""}[.]${m[2]}[.]${m[3]})`;
          }
          if (m = field.match(/^(tex|bibtex|biblatex)[.]([-a-z]+)$/)) {
            return `(${m[1] === "tex" ? "bib(la)?" : ""}[.][-a-z]+[.]${m[2]})`;
          }
          if (m = field.match(/^([-a-z]+)[.]([-a-z]+)$/)) {
            return `(${this.BetterTeX ? "bib(la)?tex" : "csl"}[.]${m[1]}[.]${m[2]})`;
          }
          if (m = field.match(/^[-a-z]+$/)) {
            return `(${this.BetterTeX ? "bib(la)?tex" : "csl"}[.][-a-z]+[.]${field})`;
          }
          return "";
        }).filter((field) => field).join("|") + ")$");
      }
      this.verbatimFields = this.preferences.verbatimFields.toLowerCase().split(",").map((field) => (m = field.trim().match(/^[/](.+)[/]$/)) ? new RegExp(m[1], "i") : this.typefield(field)).filter((s) => s);
      if (!this.verbatimFields.length)
        this.verbatimFields = null;
      this.csquotes = this.preferences.csquotes ? { open: this.preferences.csquotes[0], close: this.preferences.csquotes[1] } : null;
      this.preferences.testing = Zotero.getHiddenPref("better-bibtex.testing");
    }
    get exportDir() {
      this.input.items.current.$cacheable = false;
      return this.export.dir;
    }
    get exportPath() {
      this.input.items.current.$cacheable = false;
      return this.export.path;
    }
    typefield(field) {
      field = field.trim();
      if (field.startsWith("bibtex."))
        return this.BetterBibTeX ? field.replace(/^bibtex\./, "") : "";
      if (field.startsWith("biblatex."))
        return this.mode === "import" || this.BetterBibLaTeX ? field.replace(/^biblatex\./, "") : "";
      return field;
    }
    static Import(translator) {
      return new this(translator, "import");
    }
    static Export(translator, input) {
      var _a, _b, _c, _d;
      const translation = new this(translator, "export");
      translation.input = input;
      translation.export = {
        dir: Zotero.getOption("exportDir"),
        path: Zotero.getOption("exportPath")
      };
      if ((_a = translation.export.dir) == null ? void 0 : _a.endsWith(translation.paths.sep))
        translation.export.dir = translation.export.dir.slice(0, -1);
      translation.unicode = !translation.preferences[`ascii${translator.label.replace(/Better /, "")}`] || false;
      if (translation.preferences.baseAttachmentPath && (translation.export.dir === translation.preferences.baseAttachmentPath || ((_b = translation.export.dir) == null ? void 0 : _b.startsWith(translation.preferences.baseAttachmentPath + translation.paths.sep)))) {
        translation.preferences.relativeFilePaths = true;
      }
      translation.cacheable = translation.cacheable && translation.preferences.cache && !(translation.options.exportFileData || translation.preferences.relativeFilePaths || translation.preferences.baseAttachmentPath && ((_c = translation.export.dir) == null ? void 0 : _c.startsWith(translation.preferences.baseAttachmentPath)));
      if (translation.BetterTeX) {
        translation.preferences.separatorList = translation.preferences.separatorList.trim();
        translation.preferences.separatorNames = translation.preferences.separatorNames.trim();
        translation.and = {
          list: {
            re: new RegExp(escapeRegExp(translation.preferences.separatorList), "g"),
            repl: ` {${translation.preferences.separatorList}} `
          },
          names: {
            re: new RegExp(` ${escapeRegExp(translation.preferences.separatorNames)} `, "g"),
            repl: ` {${translation.preferences.separatorNames}} `
          }
        };
        translation.preferences.separatorList = ` ${translation.preferences.separatorList} `;
        translation.preferences.separatorNames = ` ${translation.preferences.separatorNames} `;
      }
      if (translation.preferences.testing && typeof __estrace === "undefined" && ((_d = translator.configOptions) == null ? void 0 : _d.cached)) {
        const allowedPreferences = (translator.label === "BetterBibTeX JSON" ? Object.keys(defaults) : affectedBy[translator.label]).concat(["testing"]).reduce((acc, pref) => {
          acc[pref] = translation.preferences[pref];
          return acc;
        }, {});
        translation.preferences = new Proxy(allowedPreferences, {
          set: (object, property, _value) => {
            throw new TypeError(`Unexpected set of preference ${String(property)}`);
          },
          get: (object, property) => {
            if (property === "toJSON")
              return object[property];
            if (!(property in allowedPreferences))
              new TypeError(`Preference ${property} claims not to affect ${translator.label}`);
            return object[property];
          }
        });
      }
      translation.input.items.cacheable(translation.cacheable);
      translation.collections = translation.input.collections.byKey;
      return translation;
    }
    erase() {
      this.input.items.erase();
      this.input.collections.erase();
      this.output.body = "";
      this.output.attachments = [];
    }
    saveAttachments() {
      var _a;
      if (!((_a = this.output) == null ? void 0 : _a.attachments.length))
        return;
      for (const attachment of this.output.attachments) {
        attachment.saveFile(attachment.defaultPath, true);
      }
    }
    isVerbatimField(field) {
      return !!this.verbatimFields.find((v) => typeof v === "string" ? v === field : field.match(v));
    }
  };

  // translators/Better CSL JSON.ts
  function doExport() {
    const translation = Translation.Export(ZOTERO_TRANSLATOR_INFO, collect());
    Zotero.BetterBibTeX.generateCSLJSON(translation);
    Zotero.write(translation.output.body);
    translation.erase();
  }
  return __toCommonJS(Better_CSL_JSON_exports);
})();
