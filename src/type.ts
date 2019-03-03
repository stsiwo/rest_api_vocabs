const TYPES = {
  // User
  IUserService: Symbol.for("IUserService"),
  IUserRepository: Symbol.for("IUserRepository"),

  // Word
  IWordService: Symbol.for("IWordService"),
  IWordRepository: Symbol.for("IWordRepository"),

  // Dictionary
  IDictionaryService: Symbol.for("IDictionaryService"),
  IDictionaryRepository: Symbol.for("IDictionaryRepository"),
}

export default TYPES;
