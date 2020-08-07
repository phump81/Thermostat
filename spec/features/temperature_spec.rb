feature 'viewing temperature' do
  scenario 'displays 20 as default temp' do
    visit('/')
    expect(page.find('#temperature')).to have_content '20'
  end

  scenario 'temperature can be increased' do
    visit('/')
    page.find('#temperature-up').click
    expect(page.find('#temperature')).to have_content '21'
  end

  scenario 'temperature can be decreased' do
    visit('/')
    page.find('#temperature-down').click
    expect(page.find('#temperature')).to have_content '19'
  end

  scenario 'temperature can be reset' do
    visit('/')
    page.find('#temperature-up').click
    expect(page.find('#temperature')).to have_content '21'
    page.find('#temperature-reset').click
    expect(page.find('#temperature')).to have_content '20'
  end
end
