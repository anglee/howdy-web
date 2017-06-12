const solution1 = (() => {
  /**
   * @constructor
   * @param {Integer[][]} vec2d
   */
  var Vector2D = function(vec2d) {
    this.vec2d = vec2d;
    this.nextJ = 0;
    this.nextI = 0;
    while (
      this.nextJ < vec2d.length &&
      vec2d[this.nextJ].length === 0
      ) {
      ++this.nextJ;
    }
  };


  /**
   * @this Vector2D
   * @returns {boolean}
   */
  Vector2D.prototype.hasNext = function() {
    const { nextJ, nextI, vec2d } = this;
    return (
      nextJ < vec2d.length &&
      nextI < vec2d[nextJ].length
    );
  };

  /**
   * @this Vector2D
   * @returns {integer}
   */
  Vector2D.prototype.next = function() {
    const { nextJ, nextI, vec2d } = this;
    const ret = vec2d[nextJ][nextI];
    if (nextI < vec2d[nextJ].length - 1) {
      ++this.nextI;
      return ret;
    }

    this.nextI = 0;
    ++this.nextJ;
    while (
      this.nextJ < vec2d.length &&
      vec2d[this.nextJ].length === 0
      ) {
      ++this.nextJ;
    }

    return ret;
  };

  /**
   * Your Vector2D will be called like this:
   * var i = new Vector2D(vec2d), a = [];
   * while (i.hasNext()) a.push(i.next());
   */

  return Vector2D;
})();

//--------------------------------------------------------------------------------------------------

const solution2 = (() => {
  /**
   * @constructor
   * @param {Integer[][]} vec2d
   */
  var Vector2D = function(vec2d) {
    this.i = 0;
    this.j = 0;
    this.AA = vec2d;
  };


  /**
   * @this Vector2D
   * @returns {boolean}
   */
  Vector2D.prototype.hasNext = function() {
    while (this.i < this.AA.length && this.j >= this.AA[this.i].length) {
      this.j = 0;
      this.i = this.i + 1;
    }
    return this.i < this.AA.length;
  };


  /**
   * @this Vector2D
   * @returns {integer}
   */
  Vector2D.prototype.next = function() {
    if (!this.hasNext()) { return null; }
    const ret = this.AA[this.i][this.j];
    this.j = this.j + 1;
    return ret;
  };

  /**
   * Your Vector2D will be called like this:
   * var i = new Vector2D(vec2d), a = [];
   * while (i.hasNext()) a.push(i.next());
   */

  return Vector2D;
})();

export default solution2;
