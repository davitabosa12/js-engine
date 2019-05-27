/**
 * NAO FOI FEITO POR MIM, MAS O CRIADOR DO PACOTE UUID NO NPM
 * https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
 * 
 */
export default class UUID {
    static uuidv4() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
          var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
          return v.toString(16);
        });
      }
      
}