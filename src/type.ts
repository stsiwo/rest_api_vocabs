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

  // cloudinary api 
  ICloudinaryAPI: Symbol.for("ICloudinaryAPI"),
}

export default TYPES;
