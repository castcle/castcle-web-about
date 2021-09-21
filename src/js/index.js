/*
 * Copyright (c) 2021, Castcle and/or its affiliates. All rights reserved.
 * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS FILE HEADER.
 *
 * This code is free software; you can redistribute it and/or modify it
 * under the terms of the GNU General Public License version 3 only, as
 * published by the Free Software Foundation.
 *
 * This code is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 * FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License
 * version 3 for more details (a copy is included in the LICENSE file that
 * accompanied this code).
 *
 * You should have received a copy of the GNU General Public License version
 * 3 along with this work; if not, write to the Free Software Foundation,
 * Inc., 51 Franklin St, Fifth Floor, Boston, MA 02110-1301 USA.
 *
 * Please contact Castcle, 22 Phet Kasem 47/2 Alley, Bang Khae, Bangkok,
 * Thailand 10160, or visit www.castcle.com if you need additional information
 * or have any questions.
 */
$(document).ready(function() {
  // CONSTANTS
  var TOP_BAR_MIN_SCALE = 0.9;
  var TOP_BAR_HEIGHT = $('.topbar').height();

  $(window).scroll(function(ev) {
    var scrollTop = $(window).scrollTop();
    var scale = parseFloat(TOP_BAR_HEIGHT - scrollTop) / TOP_BAR_HEIGHT;

    if (scale >= TOP_BAR_MIN_SCALE && scale <= 1.0) {
      // Only scale top bar (up or down) only if the body scroll
      // top is currently within the range of min scale.
      // Scale top bar's height
      $('.topbar').height(TOP_BAR_HEIGHT - 2 * scrollTop);
      // Scale top bar's children
      $('.topbar .scale-left').css('transform', 'scale(' + scale + ') translate(-' + 50 * (1 - scale) + '%');
      $('.topbar .scale-right').css('transform', 'scale(' + scale + ') translate(' + 50 * (1 - scale) + '%');
    }
  });
});
