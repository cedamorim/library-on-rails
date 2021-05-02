class ApplicationRecord < ActiveRecord::Base
  self.abstract_class = true

  PAGE_SIZE = 30

  def self.paginate(page)
    offset(page_offset(page))
      .limit(PAGE_SIZE)
  end

  def self.page_offset(page)
    page = page.to_i
    page = 1 unless page.positive?

    PAGE_SIZE * page.pred
  end
end
