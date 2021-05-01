require 'test_helper'

class BookControllerTest < ActionDispatch::IntegrationTest
  # GET
  test 'deve retornar o index com sucesso' do
    get '/api/book'

    assert_response :success
  end

  test 'deve retornar o index com sucesso depois de um filtro' do
    get '/api/book?search=Autor 1'

    assert_response :success
    assert_equal 1, JSON.parse(@response.body.to_s).length
  end

  test 'filtrando um author que não existe, não deve retornar nada' do
    get '/api/book?search=Autor inexistente'

    assert_response :success
    assert_equal 0, JSON.parse(@response.body.to_s).length
  end

  # POST

  test 'não deve ser possível criar um livro sem titulo' do
    post '/api/book', params: {
      author: 'The Painted Veil',
      description: 'Hello? Hello? Anybody home? Huh? Think, McFly.',
      image_url: 'https://placehold.it/100x100.png'
    }

    assert_response :unprocessable_entity
    assert_match 'title', @response.body
  end

  test 'não deve ser possível criar um livro com titulo com menos de 5 caracteres' do
    post '/api/book', params: {
      title: 'tit',
      author: 'The Painted Veil',
      description: 'Hello? Hello? Anybody home? Huh? Think, McFly.',
      image_url: 'https://placehold.it/100x100.png'
    }

    assert_response :unprocessable_entity
    assert_match 'title', @response.body
  end

  test 'não deve ser possível criar um livro sem autor' do
    post '/api/book', params: {
      title: 'titulo teste',
      description: 'Hello? Hello? Anybody home? Huh? Think, McFly.',
      image_url: 'https://placehold.it/100x100.png'
    }

    assert_response :unprocessable_entity
    assert_match 'author', @response.body
  end

  test 'não deve ser possível criar um livro com nome de autor curto' do
    post '/api/book', params: {
      title: 'titulo teste',
      author: 'au',
      description: 'Hello? Hello? Anybody home? Huh? Think, McFly.',
      image_url: 'https://placehold.it/100x100.png'
    }

    assert_response :unprocessable_entity
    assert_match 'author', @response.body
  end

  test 'não deve ser possível criar um livro sem imagem do livro' do
    post '/api/book', params: {
      title: 'titulo teste',
      author: 'autor teste',
      description: 'Hello? Hello? Anybody home? Huh? Think, McFly.'
    }

    assert_response :unprocessable_entity
    assert_match 'image_url', @response.body
  end

  test 'deve ser possível criar um livro quando os dados estão ok' do
    post '/api/book', params: {
      title: 'titulo teste',
      author: 'autor teste',
      description: 'Hello? Hello? Anybody home? Huh? Think, McFly.',
      image_url: 'https://placehold.it/100x100.png'
    }

    assert_response :created
    assert_match 'title', @response.body
  end

  # PUT

  test 'não deve ser possível atualizar um livro sem titulo' do
    put "/api/book/#{books(:one).id}", params: {
      title: '',
      author: 'autor teste',
      description: 'Hello? Hello? Anybody home? Huh? Think, McFly.',
      image_url: 'https://placehold.it/100x100.png'
    }

    assert_response :unprocessable_entity
    assert_match 'title', @response.body
  end

  test 'não deve ser possível atualizar um livro com titulo curto' do
    put "/api/book/#{books(:one).id}", params: {
      title: 'as',
      author: 'autor teste',
      description: 'Hello? Hello? Anybody home? Huh? Think, McFly.',
      image_url: 'https://placehold.it/100x100.png'
    }

    assert_response :unprocessable_entity
    assert_match 'title', @response.body
  end

  test 'não deve ser possível atualizar um livro sem autor' do
    put "/api/book/#{books(:one).id}", params: {
      title: 'titulo teste',
      author: '',
      description: 'Hello? Hello? Anybody home? Huh? Think, McFly.',
      image_url: 'https://placehold.it/100x100.png'
    }

    assert_response :unprocessable_entity
    assert_match 'author', @response.body
  end

  test 'não deve ser possível atualizar um livro com autor curto' do
    put "/api/book/#{books(:one).id}", params: {
      title: 'titulo teste',
      author: 'ab',
      description: 'Hello? Hello? Anybody home? Huh? Think, McFly.',
      image_url: 'https://placehold.it/100x100.png'
    }

    assert_response :unprocessable_entity
    assert_match 'author', @response.body
  end

  test 'não deve ser possível atualizar um livro sem imagem' do
    put "/api/book/#{books(:one).id}", params: {
      title: 'titulo teste',
      author: 'autor',
      description: 'Hello? Hello? Anybody home? Huh? Think, McFly.',
      image_url: ''
    }

    assert_response :unprocessable_entity
    assert_match 'image_url', @response.body
  end

  test 'deve ser possível alterar o livro se o dados estão ok' do
    id = books(:one).id
    put "/api/book/#{id}", params: {
      title: 'titulo teste x',
      author: 'autor',
      description: 'Hello? Hello? Anybody home? Huh? Think, McFly.',
      image_url: 'https://placehold.it/100x100.png'
    }

    assert_response :no_content
    assert_empty @response.body
    assert_equal 'titulo teste x', Book.find(id).title
  end

  # DELETE
  test 'não deve ser possível deletar um registro que não existe' do
    delete '/api/book/32145678'

    assert_response :not_found
  end

  test 'deve ser possível deletar um livro' do
    id = books(:one).id
    delete "/api/book/#{id}"

    assert_response :no_content
    assert_empty @response.body
    assert_raises(ActiveRecord::RecordNotFound) { Book.find(id) }
  end
end
