package com.saintdan.framework.exception;


import com.saintdan.framework.enums.ErrorType;

/**
 * @author <a href="http://github.com/saintdan">Liao Yifan</a>
 * @date 11/02/2017
 * @since JDK1.8
 */
public class IllegalTokenTypeException extends BaseException {

  private static final long serialVersionUID = -8476571357699322239L;

  public IllegalTokenTypeException() {
    super(ErrorType.ILLEGAL_EXT_TYPE_ERROR);
  }
}
